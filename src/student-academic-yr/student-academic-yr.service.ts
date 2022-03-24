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
  async findOne(studentAcademicYr_id: number): Promise<StudentAcademicYrDto> {
    return this.studentAcademicYrRepository.findOne(studentAcademicYr_id);
  }
  async update(studentAcademicYr_id: number, application: StudentAcademicYrDto) {
    return this.studentAcademicYrRepository.update(
      studentAcademicYr_id,
      application,
    );
  }
  async deleteOne(studentAcademicYr_id: number) {
    return this.studentAcademicYrRepository.delete(studentAcademicYr_id);
  }
}
