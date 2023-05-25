import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevopsController } from './devops/devops.controller';
import { DevopsService } from './devops/devops.service';
import { DevopsModule } from './devops/devops.module';
import { ApiKeyMiddleware } from './api-key/api-key.middleware';

@Module({
  imports: [DevopsModule],
  controllers: [AppController, DevopsController],
  providers: [AppService, DevopsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApiKeyMiddleware).forRoutes('/devops');
  }
}
