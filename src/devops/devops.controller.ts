import { Body, Controller, Headers, Post, UseGuards } from '@nestjs/common';
import { DevopsService } from './devops.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { MessageResponseDto } from './message-response.dto';
import { JwtTokenErrorResponseDto } from 'src/common/jwt-token-error-response.dto';
import { ApiKeyErrorResponseDto } from 'src/common/api-key-error-response.dto';
@Controller('devops')
@ApiTags('devops')
export class DevopsController {
  constructor(private readonly devopsService: DevopsService) {}

  @ApiOkResponse({ type: MessageResponseDto, description: 'Operación exitosa' })
  @ApiUnauthorizedResponse({
    description: 'API key missing or invalid',
    type: ApiKeyErrorResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: 'JWT token missing or invalid',
    type: JwtTokenErrorResponseDto,
  })
  @UseGuards(JwtAuthGuard)
  @Post()
  async sendMessage(@Body() data: any): Promise<any> {
    return await this.devopsService.send(data);
  }
}
