import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import type { AuthenticatedRequest } from './types/authenticated-request';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(signInDto: SignInDto): Promise<{
        accessToken: string;
        player: {
            id: number;
            name: string;
            email: string;
        };
    }>;
    getAuthenticatedPlayer(request: AuthenticatedRequest): {
        player: import("./types/authenticated-request").JwtPayload;
    };
}
