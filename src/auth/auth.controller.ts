import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { TokenResponseDto } from './token-response.dto';
import { ApiKeyErrorResponseDto } from 'src/common/api-key-error-response.dto';
@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOkResponse({ type: TokenResponseDto, description: 'Operación exitosa' })
  @Post('login')
  async login() {
    return this.authService.login();
  }
}
