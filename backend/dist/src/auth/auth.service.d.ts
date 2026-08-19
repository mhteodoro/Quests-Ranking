import { JwtService } from '@nestjs/jwt';
import { PlayersService } from '../players/players.service';
import { SignInDto } from './dto/sign-in.dto';
export declare class AuthService {
    private readonly playersService;
    private readonly jwtService;
    constructor(playersService: PlayersService, jwtService: JwtService);
    signIn(signInDto: SignInDto): Promise<{
        accessToken: string;
        player: {
            id: number;
            name: string;
            email: string;
        };
    }>;
}
