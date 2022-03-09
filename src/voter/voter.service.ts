import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VoterDto } from 'src/entities/voter.dto';
import { Repository } from 'typeorm';

@Injectable()
export class VoterService {
  constructor(
    @InjectRepository(VoterDto)
    private voterRepository: Repository<VoterDto>,
  ) {}

  async create(application: VoterDto): Promise<VoterDto> {
    return this.voterRepository.save(application);
  }
  async findAll(): Promise<VoterDto[]> {
    return this.voterRepository.find();
  }
  async findOne(voter_id: number): Promise<VoterDto> {
    return this.voterRepository.findOne(voter_id);
  }
  async update(voter_id: number, application: VoterDto) {
    return this.voterRepository.update(voter_id, application);
  }
  async deleteOne(voter_id: number) {
    return this.voterRepository.delete(voter_id);
  }
}
