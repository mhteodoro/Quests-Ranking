import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import type { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: process.env.FRONTEND_URL ?? 'http://localhost:3001',
  },
})
export class RankingGateway {
  @WebSocketServer()
  private server!: Server;

  notifyRankingUpdated() {
    this.server.emit('ranking:updated');
  }
}
