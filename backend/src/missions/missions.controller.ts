import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthTokenGuard } from '../auth/auth-token.guard';
import type { AuthenticatedRequest } from '../auth/types/authenticated-request';
import { MissionsService } from './missions.service';

@Controller('missions')
export class MissionsController {
  constructor(private readonly missionsService: MissionsService) {}

  @Get()
  findAll() {
    return this.missionsService.findAll();
  }

  @Get('my-completions')
  @UseGuards(AuthTokenGuard)
  findMyCompletions(@Req() request: AuthenticatedRequest) {
    return this.missionsService.findCompletedByPlayer(request.player.sub);
  }

  @Post(':missionId/complete')
  @UseGuards(AuthTokenGuard)
  complete(
    @Param('missionId', ParseIntPipe) missionId: number,
    @Req() request: AuthenticatedRequest,
  ) {
    return this.missionsService.complete(missionId, request.player.sub);
  }
}
