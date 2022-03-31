import { Test, TestingModule } from '@nestjs/testing';
import { VoteRepService } from './vote-rep.service';

describe('VoteRepService', () => {
  let service: VoteRepService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VoteRepService],
    }).compile();

    service = module.get<VoteRepService>(VoteRepService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
