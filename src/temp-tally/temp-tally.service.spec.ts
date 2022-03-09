import { Test, TestingModule } from '@nestjs/testing';
import { TempTallyService } from './temp-tally.service';

describe('TempTallyService', () => {
  let service: TempTallyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TempTallyService],
    }).compile();

    service = module.get<TempTallyService>(TempTallyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
