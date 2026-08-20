import { CreatePlayerDto } from './dto/create-player.dto';
import { PlayersService } from './players.service';
export declare class PlayersController {
    private readonly playersService;
    constructor(playersService: PlayersService);
    create(createPlayerDto: CreatePlayerDto): Promise<{
        id: number;
        name: string;
        email: string;
        createdAt: Date;
    }>;
}
