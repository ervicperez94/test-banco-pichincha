import { Test, TestingModule } from '@nestjs/testing';
import { DevOpsController } from './dev-ops.controller';

describe('DevOpsController', () => {
  let controller: DevOpsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DevOpsController],
    }).compile();

    controller = module.get<DevOpsController>(DevOpsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
