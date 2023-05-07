import { Body, Controller, Headers, Post } from '@nestjs/common';
import { DevopsService } from './devops.service';
@Controller('devops')
export class DevopsController {
  constructor(private readonly devopsService: DevopsService) {}
  @Post()
  async sendMessage(@Body() data: any): Promise<any> {
    return await this.devopsService.send(data);
  }
}
