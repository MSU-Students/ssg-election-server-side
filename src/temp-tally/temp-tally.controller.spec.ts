import { Test, TestingModule } from '@nestjs/testing';
import { TempTallyController } from './temp-tally.controller';

describe('TempTallyController', () => {
  let controller: TempTallyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TempTallyController],
    }).compile();

    controller = module.get<TempTallyController>(TempTallyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
