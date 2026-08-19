import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { PlayersService } from '../players/players.service';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly playersService: PlayersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto) {
    const player = await this.playersService.findByEmail(signInDto.email);

    if (!player) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const passwordMatches = await compare(
      signInDto.password,
      player.passwordHash,
    );

    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const accessToken = await this.jwtService.signAsync({
      sub: player.id,
      email: player.email,
    });

    return {
      accessToken,
      player: {
        id: player.id,
        name: player.name,
        email: player.email,
      },
    };
  }
}