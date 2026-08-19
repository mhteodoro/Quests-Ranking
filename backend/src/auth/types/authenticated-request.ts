import type { Request } from 'express';

export interface JwtPayload {
  sub: number;
  email: string;
  iat?: number;
  exp?: number;
}

export interface AuthenticatedRequest extends Request {
  player: JwtPayload;
}