import { Controller, Get } from '@nestjs/common';
import { RankingService } from './ranking.service';
import type { RankingEntry } from './types/ranking-entry';

@Controller('ranking')
export class RankingController {
    constructor(private readonly rankingService: RankingService) { }

    @Get()
    findAll(): Promise<RankingEntry[]> {
        return this.rankingService.findAll();
    }
}