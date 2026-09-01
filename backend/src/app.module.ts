import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PlayersModule } from './players/players.module';
import { AuthModule } from './auth/auth.module';
import { MissionsModule } from './missions/missions.module';
import { RankingModule } from './ranking/ranking.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    PlayersModule,
    AuthModule,
    MissionsModule,
    RankingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
