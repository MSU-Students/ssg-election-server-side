import { StudentAcademicYrDto } from './../entities/student-academic-yr.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StudentAcademicYrService {
  constructor(
    @InjectRepository(StudentAcademicYrDto)
    private studentAcademicYrRepository: Repository<StudentAcademicYrDto>,
  ) {}

  async create(
    application: StudentAcademicYrDto,
  ): Promise<StudentAcademicYrDto> {
    return this.studentAcademicYrRepository.save(application);
  }
  async findAll(): Promise<StudentAcademicYrDto[]> {
    return this.studentAcademicYrRepository.find();
  }
  async findOne(account_type_id: number): Promise<StudentAcademicYrDto> {
    return this.studentAcademicYrRepository.findOne(account_type_id);
  }
  async update(account_type_id: number, application: StudentAcademicYrDto) {
    return this.studentAcademicYrRepository.update(
      account_type_id,
      application,
    );
  }
  async deleteOne(account_type_id: number) {
    return this.studentAcademicYrRepository.delete(account_type_id);
  }
}
