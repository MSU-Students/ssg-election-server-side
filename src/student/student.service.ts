import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentDto } from 'src/entities/student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentDto)
    private studentRepository: Repository<StudentDto>,
  ) {}

  async create(application: StudentDto): Promise<StudentDto> {
    return this.studentRepository.save(application);
  }
  async findAll(): Promise<StudentDto[]> {
    return this.studentRepository.find();
  }
  async findOne(student_id: number): Promise<StudentDto> {
    return this.studentRepository.findOne(student_id);
  }
  async update(student_id: number, application: StudentDto) {
    return this.studentRepository.update(student_id, application);
  }
  async delete(student_id: number) {
    return this.studentRepository.delete(student_id);
  }
}
