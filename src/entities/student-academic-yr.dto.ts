import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { StudentAcademicYr } from './../interfaces/student-academic-yr.interface';

@Entity('student_academic_yr')
export class StudentAcademicYrDto implements StudentAcademicYr {
  @PrimaryGeneratedColumn()
  student_academic_yr_id?: number;

  @ApiProperty({ example: '201811518' })
  @Column({ type: 'int' })
  student_id: number;

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
}
