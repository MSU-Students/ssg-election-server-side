import { Test, TestingModule } from '@nestjs/testing';
import { SsgMemberService } from './ssg-member.service';

describe('SsgMemberService', () => {
  let service: SsgMemberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SsgMemberService],
    }).compile();

    service = module.get<SsgMemberService>(SsgMemberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
