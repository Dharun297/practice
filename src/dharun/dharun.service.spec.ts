import { Test, TestingModule } from '@nestjs/testing';
import { DharunService } from './dharun.service';

describe('DharunService', () => {
  let service: DharunService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DharunService],
    }).compile();

    service = module.get<DharunService>(DharunService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
