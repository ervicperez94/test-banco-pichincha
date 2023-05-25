import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './constants';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromHeader('x-jwt-kwy'),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
      passReqToCallback: true,
    });
  }

  async validate(payload: any) {
    const tokenUsed = await this.authService.isTokenUsed(payload.sub); // Verifica si el token ya ha sido utilizado

    if (tokenUsed) {
      throw new UnauthorizedException('Token already used');
    }

    // Si el token no ha sido utilizado previamente, puedes marcarlo como utilizado en tu servicio de token
    await this.authService.markTokenAsUsed(payload.sub);
    return { userId: payload.sub, username: payload.username };
  }
}
