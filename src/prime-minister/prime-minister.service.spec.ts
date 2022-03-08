import { Test, TestingModule } from '@nestjs/testing';
import { PrimeMinisterService } from './prime-minister.service';

describe('PrimeMinisterService', () => {
  let service: PrimeMinisterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrimeMinisterService],
    }).compile();

    service = module.get<PrimeMinisterService>(PrimeMinisterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
