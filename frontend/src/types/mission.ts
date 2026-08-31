export interface Mission {
    id: number;
    title: string;
    description: string;
    points: number;
}

export interface MissionCompletion {
    missionId: number;
    completedAt: string;
}

export interface CompleteMissionResponse {
    message: string;
    completion: {
        missionId: number;
        completedAt: string;
        title: string;
        pointsEarned: number;
    };
}