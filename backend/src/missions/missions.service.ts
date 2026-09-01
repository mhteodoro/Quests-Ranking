import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { RankingGateway } from '../ranking/ranking.gateway';

@Injectable()
export class MissionsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly rankingGateway: RankingGateway,
  ) {}

  findAll() {
    return this.prisma.mission.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        points: true,
      },
      orderBy: {
        id: 'asc',
      },
    });
  }

  async complete(missionId: number, playerId: number) {
    const mission = await this.prisma.mission.findUnique({
      where: {
        id: missionId,
      },
      select: {
        id: true,
        title: true,
        points: true,
      },
    });

    if (!mission) {
      throw new NotFoundException('Mission not found');
    }

    try {
      const completion = await this.prisma.missionCompletion.create({
        data: {
          playerId,
          missionId,
        },
        select: {
          missionId: true,
          completedAt: true,
        },
      });

      this.rankingGateway.notifyRankingUpdated();

      return {
        message: 'Mission completed successfully',
        completion: {
          ...completion,
          title: mission.title,
          pointsEarned: mission.points,
        },
      };
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Mission already completed');
      }

      throw error;
    }
  }

  findCompletedByPlayer(playerId: number) {
    return this.prisma.missionCompletion.findMany({
      where: {
        playerId,
      },
      select: {
        missionId: true,
        completedAt: true,
      },
      orderBy: {
        completedAt: 'asc',
      },
    });
  }
}
