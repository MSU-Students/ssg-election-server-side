import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CandidateDto } from 'src/entities/candidate.dto';

@Injectable()
export class CandidateService {
  constructor(
    @InjectRepository(CandidateDto)
    private candidateRepository: Repository<CandidateDto>,
  ) {}

  async create(application: CandidateDto): Promise<CandidateDto> {
    return this.candidateRepository.save(application);
  }
  async findAll(): Promise<CandidateDto[]> {
    return this.candidateRepository.find({
      relations: ['election', 'student'],
    });
  }
  async findOne(candidate_id: number): Promise<CandidateDto> {
    return this.candidateRepository.findOne(candidate_id);
  }
  async update(candidate_id: number, application: CandidateDto) {
    return this.candidateRepository.update(candidate_id, application);
  }
  async deleteOne(candidate_id: number) {
    return this.candidateRepository.delete(candidate_id);
  }
}
