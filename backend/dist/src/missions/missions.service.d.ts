import { PrismaService } from '../prisma/prisma.service';
export declare class MissionsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        title: string;
        description: string;
        points: number;
    }[]>;
}
