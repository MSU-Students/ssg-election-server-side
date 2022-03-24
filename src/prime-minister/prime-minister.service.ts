import { PrimeMinisterDto } from './../entities/prime-minister.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PrimeMinisterService {
    constructor(
        @InjectRepository(PrimeMinisterDto)
        private primeMinisterRepository: Repository<PrimeMinisterDto>,
      ) {}
    
      async create(application: PrimeMinisterDto): Promise<PrimeMinisterDto> {
        return this.primeMinisterRepository.save(application);
      }
      async findAll(): Promise<PrimeMinisterDto[]> {
        return this.primeMinisterRepository.find();
      }
      async findOne(primeMinister_id: number): Promise<PrimeMinisterDto> {
        return this.primeMinisterRepository.findOne(primeMinister_id);
      }
      async update(primeMinister_id: number, application: PrimeMinisterDto) {
        return this.primeMinisterRepository.update(primeMinister_id, application);
      }
      async deleteOne(primeMinister_id: number) {
        return this.primeMinisterRepository.delete(primeMinister_id);
      }
}
