import { Test, TestingModule } from '@nestjs/testing';
import { VoteSsgService } from './vote-ssg.service';

describe('VoteSsgService', () => {
  let service: VoteSsgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VoteSsgService],
    }).compile();

    service = module.get<VoteSsgService>(VoteSsgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
