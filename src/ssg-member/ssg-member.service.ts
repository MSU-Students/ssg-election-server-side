import { SsgMemberDto } from '../entities/ssg-member.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SsgMemberService {
  constructor(
    @InjectRepository(SsgMemberDto)
    private SsgMemberRepository: Repository<SsgMemberDto>,
  ) {}

  async create(application: SsgMemberDto): Promise<SsgMemberDto> {
    return this.SsgMemberRepository.save(application);
  }
  async findAll(): Promise<SsgMemberDto[]> {
    return this.SsgMemberRepository.find({
      relations: ['student', 'user'],
    });
  }
  async findOne(ssg_id: number): Promise<SsgMemberDto> {
    return this.SsgMemberRepository.findOne(ssg_id);
  }
  async update(ssg_id: number, application: SsgMemberDto) {
    return this.SsgMemberRepository.update(ssg_id, application);
  }
  async delete(ssg_id: number) {
    return this.SsgMemberRepository.delete(ssg_id);
  }
}
