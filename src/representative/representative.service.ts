import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RepresentativeDto } from 'src/entities/representative.dto';


@Injectable()
export class RepresentativeService {
    constructor(
        @InjectRepository(RepresentativeDto)
        private representativeRepository: Repository<RepresentativeDto>,
      ) {}
    
      async create(application: RepresentativeDto): Promise<RepresentativeDto> {
        return this.representativeRepository.save(application);
      }
      async findAll(): Promise<RepresentativeDto[]> {
        return this.representativeRepository.find();
      }
      async findOne(representative_id: number): Promise<RepresentativeDto> {
        return this.representativeRepository.findOne(representative_id);
      }
      async update(representative_id: number, application: RepresentativeDto) {
        return this.representativeRepository.update(representative_id, application);
      }
      async deleteOne(representative_id: number) {
        return this.representativeRepository.delete(representative_id);
      }
}
