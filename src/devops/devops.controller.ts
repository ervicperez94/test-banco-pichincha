import { Body, Controller, Headers, Post, UseGuards } from '@nestjs/common';
import { DevopsService } from './devops.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('devops')
export class DevopsController {
  constructor(private readonly devopsService: DevopsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async sendMessage(@Body() data: any): Promise<any> {
    return await this.devopsService.send(data);
  }
}
