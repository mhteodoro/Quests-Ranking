import { PrismaService } from '../prisma/prisma.service';
import { CreatePlayerDto } from './dto/create-player.dto';
export declare class PlayersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createPlayerDto: CreatePlayerDto): Promise<{
        id: number;
        name: string;
        email: string;
        createdAt: Date;
    }>;
    findByEmail(email: string): Promise<{
        id: number;
        name: string;
        email: string;
        passwordHash: string;
        createdAt: Date;
    } | null>;
}
