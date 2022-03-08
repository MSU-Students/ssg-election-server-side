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
      async findOne(account_type_id: number): Promise<PrimeMinisterDto> {
        return this.primeMinisterRepository.findOne(account_type_id);
      }
      async update(account_type_id: number, application: PrimeMinisterDto) {
        return this.primeMinisterRepository.update(account_type_id, application);
      }
      async deleteOne(account_type_id: number) {
        return this.primeMinisterRepository.delete(account_type_id);
      }
}
