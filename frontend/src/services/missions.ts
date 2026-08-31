import { apiRequest } from '@/lib/api';
import type {
    CompleteMissionResponse,
    Mission,
    MissionCompletion,
} from '@/types/mission';

export function getMissions(): Promise<Mission[]> {
    return apiRequest<Mission[]>('/missions', {
        cache: 'no-store',
    });
}

export function getMyCompletions(
    token: string,
): Promise<MissionCompletion[]> {
    return apiRequest<MissionCompletion[]>(
        '/missions/my-completions',
        {
            token,
            cache: 'no-store',
        },
    );
}

export function completeMission(
    missionId: number,
    token: string,
): Promise<CompleteMissionResponse> {
    return apiRequest<CompleteMissionResponse>(
        `/missions/${missionId}/complete`,
        {
            method: 'POST',
            token,
        },
    );
}