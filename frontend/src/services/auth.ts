import { apiRequest } from '@/lib/api';
import type {
    LoginData,
    LoginResponse,
    Player,
    RegisterPlayerData,
} from '@/types/auth';

export function registerPlayer(
    data: RegisterPlayerData,
): Promise<Player> {
    return apiRequest<Player>('/players', {
        method: 'POST',
        body: JSON.stringify(data),
    });
}

export function login(data: LoginData): Promise<LoginResponse> {
    return apiRequest<LoginResponse>('/auth/login', {
        method: 'POST',
        body: JSON.stringify(data),
    });
}