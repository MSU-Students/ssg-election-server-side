import { VoteRepDto } from 'src/entities/vote-rep.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VoteRepService {
  constructor(
    @InjectRepository(VoteRepDto)
    private voteRepRepository: Repository<VoteRepDto>,
  ) {}

  async create(application: VoteRepDto): Promise<VoteRepDto> {
    return this.voteRepRepository.save(application);
  }
  async findAll(): Promise<VoteRepDto[]> {
    return this.voteRepRepository.find();
  }
  async findOne(voter_rep_id: number): Promise<VoteRepDto> {
    return this.voteRepRepository.findOne(voter_rep_id);
  }
  async update(voter_rep_id: number, application: VoteRepDto) {
    return this.voteRepRepository.update(voter_rep_id, application);
  }
  async deleteOne(voter_rep_id: number) {
    return this.voteRepRepository.delete(voter_rep_id);
  }
}
