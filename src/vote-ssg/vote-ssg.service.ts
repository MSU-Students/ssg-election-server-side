import { VoteSsgDto } from './../entities/vote-ssg.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VoteSsgService {
  constructor(
    @InjectRepository(VoteSsgDto)
    private voteSsgRepository: Repository<VoteSsgDto>,
  ) {}

  async create(application: VoteSsgDto): Promise<VoteSsgDto> {
    return this.voteSsgRepository.save(application);
  }
  async findAll(): Promise<VoteSsgDto[]> {
    return this.voteSsgRepository.find({
      relations: ['prime', 'secretary'],
    });
  }

  async find(student_id: number) {
    const votes = await this.voteSsgRepository.find({
      relations: ['prime', 'secretary'],
      where: {
        student: student_id,
      },
    });
    return votes[0] || undefined;
  }
  async findOne(voter_ssg_id: number): Promise<VoteSsgDto> {
    return this.voteSsgRepository.findOne(voter_ssg_id);
  }
  async update(voter_ssg_id: number, application: VoteSsgDto) {
    return this.voteSsgRepository.update(voter_ssg_id, application);
  }
  async delete(voter_ssg_id: number) {
    return this.voteSsgRepository.delete(voter_ssg_id);
  }
}
