import { PrismaService } from '../prisma/prisma.service';
import type { RankingEntry } from './types/ranking-entry';
export declare class RankingService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<RankingEntry[]>;
}
