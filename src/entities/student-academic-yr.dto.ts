import { CandidateDto } from 'src/entities/candidate.dto';
import { StudentDto } from 'src/entities/student.dto';
import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { StudentAcademicYr } from './../interfaces/student-academic-yr.interface';

@Entity('studentAcademicYr')
export class StudentAcademicYrDto implements StudentAcademicYr {
  @PrimaryGeneratedColumn()
  studentAcademicYr_id?: number;

  @ApiProperty({ example: 'College of Health Sciences' })
  @Column({ length: 50 })
  college: string;

  @ApiProperty({ example: 'Department of Nursing' })
  @Column({ length: 50 })
  department: string;

  @ApiProperty({ example: 'BS Nursing' })
  @Column({ length: 50 })
  course: string;

  @ApiProperty({ example: '2018' })
  @Column({ type: 'int' })
  year_admitted: number;

  @ApiProperty({ example: '2019' })
  @Column({ type: 'int' })
  academic_year: number;

  @ApiProperty({ example: '4' })
  @Column({ type: 'int' })
  current_yr_level: number;

  @OneToMany(() => StudentDto, (student) => student.studentyr)
  @JoinColumn({name: 'student_id'})
  student: StudentDto[];

  @OneToMany(() => CandidateDto, (candidate) => candidate.studentyr)
  candidate: CandidateDto[];
}
