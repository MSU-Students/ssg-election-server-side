import { Test, TestingModule } from '@nestjs/testing';
import { SsgMemberController } from './ssg-member.controller';

describe('SsgMemberController', () => {
  let controller: SsgMemberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SsgMemberController],
    }).compile();

    controller = module.get<SsgMemberController>(SsgMemberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
