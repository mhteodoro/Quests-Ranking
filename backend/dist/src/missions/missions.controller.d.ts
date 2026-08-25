import type { AuthenticatedRequest } from '../auth/types/authenticated-request';
import { MissionsService } from './missions.service';
export declare class MissionsController {
    private readonly missionsService;
    constructor(missionsService: MissionsService);
    findAll(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        title: string;
        description: string;
        points: number;
    }[]>;
    findMyCompletions(request: AuthenticatedRequest): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        completedAt: Date;
        missionId: number;
    }[]>;
    complete(missionId: number, request: AuthenticatedRequest): Promise<{
        message: string;
        completion: {
            title: string;
            pointsEarned: number;
            completedAt: Date;
            missionId: number;
        };
    }>;
}
