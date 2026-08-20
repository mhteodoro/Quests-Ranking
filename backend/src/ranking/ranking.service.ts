import { Injectable } from '@nestjs/common';
import { Prisma } from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import type { RankingEntry } from './types/ranking-entry';

@Injectable()
export class RankingService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<RankingEntry[]> {
    return this.prisma.$queryRaw<RankingEntry[]>(
      Prisma.sql`
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
      `,
    );
  }
}