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
import { Blob } from 'buffer';

@Entity('student')
export class StudentDto implements Student {
  @PrimaryGeneratedColumn()
  student_id?: number;

  @ApiProperty({ example: '01' })
  @Column({ type: 'int' })
  account_id: number;

  @ApiProperty({ example: '01' })
  @Column({ type: 'int' })
  school_id: number;

  @ApiProperty({ example: 'Najmah' })
  @Column({ length: 100 })
  first_name: string;

  @ApiProperty({ example: 'Omar' })
  @Column({ length: 100 })
  last_name: string;
}
