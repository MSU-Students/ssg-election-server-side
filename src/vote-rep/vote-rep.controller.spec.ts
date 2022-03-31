import { Test, TestingModule } from '@nestjs/testing';
import { VoteRepController } from './vote-rep.controller';

describe('VoteRepController', () => {
  let controller: VoteRepController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoteRepController],
    }).compile();

    controller = module.get<VoteRepController>(VoteRepController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
