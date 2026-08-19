import { PrismaService } from '../prisma/prisma.service';
import { CreatePlayerDto } from './dto/create-player.dto';
export declare class PlayersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createPlayerDto: CreatePlayerDto): Promise<{
        name: string;
        email: string;
        createdAt: Date;
        id: number;
    }>;
    findByEmail(email: string): Promise<{
        name: string;
        email: string;
        passwordHash: string;
        createdAt: Date;
        id: number;
    } | null>;
}
