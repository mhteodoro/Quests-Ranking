import { apiRequest } from '@/lib/api';
import type { RankingEntry } from '@/types/ranking';

export function getRanking(): Promise<RankingEntry[]> {
    return apiRequest<RankingEntry[]>('/ranking', {
        cache: 'no-store',
    });
}