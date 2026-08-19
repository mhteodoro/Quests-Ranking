import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MissionsService {
    constructor(private readonly prisma: PrismaService) { }

    findAll() {
        return this.prisma.mission.findMany({
            select: {
                id: true,
                title: true,
                description: true,
                points: true,
            },
            orderBy: {
                id: 'asc',
            },
        });
    }
}