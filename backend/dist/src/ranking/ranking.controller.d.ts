import { RankingService } from './ranking.service';
import type { RankingEntry } from './types/ranking-entry';
export declare class RankingController {
    private readonly rankingService;
    constructor(rankingService: RankingService);
    findAll(): Promise<RankingEntry[]>;
}
