import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const apiKey = req.headers['x-parse-rest-api-key'];

    if (!apiKey || apiKey !== '2f5ae96c-b558-4c7b-a590-a501ae1c3f6c') {
      return res.status(401).json({ message: 'Invalid API key' });
    }

    next();
  }
}
