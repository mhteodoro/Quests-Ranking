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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt_1 = require("bcrypt");
const players_service_1 = require("../players/players.service");
let AuthService = class AuthService {
    playersService;
    jwtService;
    constructor(playersService, jwtService) {
        this.playersService = playersService;
        this.jwtService = jwtService;
    }
    async signIn(signInDto) {
        const player = await this.playersService.findByEmail(signInDto.email);
        if (!player) {
            throw new common_1.UnauthorizedException('Invalid email or password');
        }
        const passwordMatches = await (0, bcrypt_1.compare)(signInDto.password, player.passwordHash);
        if (!passwordMatches) {
            throw new common_1.UnauthorizedException('Invalid email or password');
        }
        const accessToken = await this.jwtService.signAsync({
            sub: player.id,
            email: player.email,
        });
        return {
            accessToken,
            player: {
                id: player.id,
                name: player.name,
                email: player.email,
            },
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [players_service_1.PlayersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map