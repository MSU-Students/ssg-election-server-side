import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Student } from '../interfaces/student.interface';

@Entity('student')
export class StudentDto implements Student {
  @ApiProperty({ example: '201811518' })
  @Column()
  student_id?: number;

  @PrimaryGeneratedColumn()
  account_id?: number;

  @PrimaryGeneratedColumn()
  school_id?: number;

  @ApiProperty({ example: 'Najmah' })
  @Column({ length: 100 })
  first_name: string;

  @ApiProperty({ example: 'Omar' })
  @Column({ length: 100 })
  last_name: string;
}
