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
}
