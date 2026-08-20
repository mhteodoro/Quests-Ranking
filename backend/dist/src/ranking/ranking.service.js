"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankingService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../generated/prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
let RankingService = class RankingService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.$queryRaw(client_1.Prisma.sql `
        SELECT
          (
            RANK() OVER (
              ORDER BY COALESCE(SUM(m.points), 0) DESC
            )
          )::int AS "position",
          p.id,
          p.name,
          COALESCE(SUM(m.points), 0)::int AS "totalPoints",
          COUNT(mc."missionId")::int AS "completedMissions"
        FROM "Player" AS p
        LEFT JOIN "MissionCompletion" AS mc
          ON mc."playerId" = p.id
        LEFT JOIN "Mission" AS m
          ON m.id = mc."missionId"
        GROUP BY p.id, p.name
        ORDER BY
          "totalPoints" DESC,
          p.name ASC,
          p.id ASC
      `);
    }
};
exports.RankingService = RankingService;
exports.RankingService = RankingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RankingService);
//# sourceMappingURL=ranking.service.js.map