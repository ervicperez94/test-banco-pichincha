import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login() {
    const payload = { username: 'anonymous', sub: 1 }; // Aquí puedes personalizar los datos del payload.
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
