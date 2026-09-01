import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { RankingController } from './ranking.controller';
import { RankingService } from './ranking.service';
import { RankingGateway } from './ranking.gateway';

@Module({
  imports: [PrismaModule],
  controllers: [RankingController],
  providers: [RankingService, RankingGateway],
  exports: [RankingGateway],
})
export class RankingModule {}
