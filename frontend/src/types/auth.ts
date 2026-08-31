export interface Player {
    id: number;
    name: string;
    email: string;
}

export interface RegisterPlayerData {
    name: string;
    email: string;
    password: string;
}

export interface LoginData {
    email: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
    player: Player;
}