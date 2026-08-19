import { ConflictException, Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { Prisma } from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePlayerDto } from './dto/create-player.dto';

@Injectable()
export class PlayersService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createPlayerDto: CreatePlayerDto) {
    const name = createPlayerDto.name.trim();
    const email = createPlayerDto.email.trim().toLowerCase();
    const passwordHash = await hash(createPlayerDto.password, 12);

    try {
      return await this.prisma.player.create({
        data: {
          name,
          email,
          passwordHash,
        },
        select: {
          id: true,
          name: true,
          email: true,
          createdAt: true,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Email already registered');
      }

      throw error;
    }
  }

  async findByEmail(email: string) {
    return this.prisma.player.findUnique({
      where: {
        email: email.trim().toLowerCase(),
      },
    });
  }

}

