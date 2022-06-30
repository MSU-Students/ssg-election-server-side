import { Test, TestingModule } from '@nestjs/testing';
import { ssgMemberController } from './ssg-member.controller';

describe('SsgMemberController', () => {
  let controller: ssgMemberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ssgMemberController],
    }).compile();

    controller = module.get<ssgMemberController>(ssgMemberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
