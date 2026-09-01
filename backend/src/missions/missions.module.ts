import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';
import { MissionsController } from './missions.controller';
import { MissionsService } from './missions.service';
import { RankingModule } from '../ranking/ranking.module';

@Module({
  imports: [PrismaModule, AuthModule, RankingModule],
  controllers: [MissionsController],
  providers: [MissionsService],
})
export class MissionsModule {}
