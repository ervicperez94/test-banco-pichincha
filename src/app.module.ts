import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevOpsController } from './dev-ops/dev-ops.controller';

@Module({
  imports: [],
  controllers: [AppController, DevOpsController],
  providers: [AppService],
})
export class AppModule {}
