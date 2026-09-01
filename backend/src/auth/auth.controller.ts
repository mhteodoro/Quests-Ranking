import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthTokenGuard } from './auth-token.guard';
import { SignInDto } from './dto/sign-in.dto';
import type { AuthenticatedRequest } from './types/authenticated-request';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @Get('me')
  @UseGuards(AuthTokenGuard)
  getAuthenticatedPlayer(@Req() request: AuthenticatedRequest) {
    return {
      player: request.player,
    };
  }
}
