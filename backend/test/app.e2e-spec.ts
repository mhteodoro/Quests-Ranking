import type { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';
import type { Server } from 'node:http';

interface CreatedPlayerResponse {
  id: number;
  name: string;
  email: string;
}

interface LoginResponse {
  accessToken: string;
}

describe('Mission completion flow (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let httpServer: Server;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    httpServer = app.getHttpServer() as Server;

    prisma = app.get(PrismaService);
  });

  beforeEach(async () => {
    await prisma.missionCompletion.deleteMany();
    await prisma.mission.deleteMany();
    await prisma.player.deleteMany();
  });

  afterAll(async () => {
    if (app) {
      await app.close();
    }
  });

  it('awards points only once for simultaneous requests', async () => {
    const mission = await prisma.mission.create({
      data: {
        title: 'Concurrent Mission',
        description: 'Mission used by the concurrency test.',
        points: 100,
      },
    });

    const registrationResponse = await request(httpServer)
      .post('/players')
      .send({
        name: 'Test Player',
        email: 'player@test.com',
        password: '12345678',
      })
      .expect(201);

    const playerBody = registrationResponse.body as CreatedPlayerResponse;

    const playerId = playerBody.id;

    const loginResponse = await request(httpServer)
      .post('/auth/login')
      .send({
        email: 'player@test.com',
        password: '12345678',
      })
      .expect(200);

    const loginBody = loginResponse.body as LoginResponse;

    const accessToken = loginBody.accessToken;

    const responses = await Promise.all([
      request(httpServer)
        .post(`/missions/${mission.id}/complete`)
        .set('Authorization', `Bearer ${accessToken}`),
      request(httpServer)
        .post(`/missions/${mission.id}/complete`)
        .set('Authorization', `Bearer ${accessToken}`),
    ]);

    const statusCodes = responses.map((response) => response.status).sort();

    expect(statusCodes).toEqual([201, 409]);

    const completionCount = await prisma.missionCompletion.count({
      where: {
        playerId,
        missionId: mission.id,
      },
    });

    expect(completionCount).toBe(1);

    const rankingResponse = await request(httpServer)
      .get('/ranking')
      .expect(200);

    expect(rankingResponse.body).toEqual([
      {
        position: 1,
        id: playerId,
        name: 'Test Player',
        totalPoints: 100,
        completedMissions: 1,
      },
    ]);
  });
});
