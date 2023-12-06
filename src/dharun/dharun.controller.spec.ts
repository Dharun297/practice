import { Test, TestingModule } from '@nestjs/testing';
import { DharunController } from './dharun.controller';

describe('DharunController', () => {
  let controller: DharunController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DharunController],
    }).compile();

    controller = module.get<DharunController>(DharunController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
