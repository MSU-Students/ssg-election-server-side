import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ElectionDto } from 'src/entities/election.dto';

@Injectable()
export class ElectionService {
  constructor(
    @InjectRepository(ElectionDto)
    private electionRepository: Repository<ElectionDto>,
  ) {}

  async create(application: ElectionDto): Promise<ElectionDto> {
    return this.electionRepository.save(application);
  }
  async findAll(): Promise<ElectionDto[]> {
    return this.electionRepository.find();
  }
  async findOne(election_id: number): Promise<ElectionDto> {
    return this.electionRepository.findOne(election_id);
  }
  async update(election_id: number, application: ElectionDto) {
    return this.electionRepository.update(election_id, application);
  }
  async deleteOne(election_id: number) {
    return this.electionRepository.delete(election_id);
  }
}
