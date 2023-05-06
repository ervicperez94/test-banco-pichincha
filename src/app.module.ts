import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevopsController } from './devops/devops.controller';
import { DevopsService } from './devops/devops.service';

@Module({
  imports: [],
  controllers: [AppController, DevopsController],
  providers: [AppService, DevopsService],
})
export class AppModule {}
