import { Injectable } from '@nestjs/common';

@Injectable()
export class TokenService {
  private usedTokens: Set<string> = new Set<string>();

  async isTokenUsed(token: string): Promise<boolean> {
    return this.usedTokens.has(token);
  }

  async markTokenAsUsed(token: string): Promise<void> {
    this.usedTokens.add(token);
  }
}
