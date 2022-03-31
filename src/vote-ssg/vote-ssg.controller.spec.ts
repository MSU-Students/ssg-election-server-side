import { Test, TestingModule } from '@nestjs/testing';
import { VoteSsgController } from './vote-ssg.controller';

describe('VoteSsgController', () => {
  let controller: VoteSsgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoteSsgController],
    }).compile();

    controller = module.get<VoteSsgController>(VoteSsgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
