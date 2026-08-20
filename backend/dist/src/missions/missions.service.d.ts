import { Prisma } from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
export declare class MissionsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Prisma.PrismaPromise<{
        id: number;
        title: string;
        description: string;
        points: number;
    }[]>;
    complete(missionId: number, playerId: number): Promise<{
        message: string;
        completion: {
            title: string;
            pointsEarned: number;
            missionId: number;
            completedAt: Date;
        };
    }>;
    findCompletedByPlayer(playerId: number): Prisma.PrismaPromise<{
        missionId: number;
        completedAt: Date;
    }[]>;
}
