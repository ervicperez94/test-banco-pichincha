import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private usedTokens: Set<string> = new Set<string>();
  constructor(private jwtService: JwtService) {}

  async login() {
    const payload = { username: 'anonymous', sub: 1 }; // Aquí puedes personalizar los datos del payload.
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  async isTokenUsed(token: string): Promise<boolean> {
    return this.usedTokens.has(token);
  }

  async markTokenAsUsed(token: string): Promise<void> {
    this.usedTokens.add(token);
  }
}
