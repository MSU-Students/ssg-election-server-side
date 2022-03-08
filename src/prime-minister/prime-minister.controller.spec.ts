import { Test, TestingModule } from '@nestjs/testing';
import { PrimeMinisterController } from './prime-minister.controller';

describe('PrimeMinisterController', () => {
  let controller: PrimeMinisterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrimeMinisterController],
    }).compile();

    controller = module.get<PrimeMinisterController>(PrimeMinisterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
