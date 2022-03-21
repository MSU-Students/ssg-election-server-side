import { StudentAcademicYrDto } from 'src/entities/student-academic-yr.dto';
import { StudentAcademicYr } from './../interfaces/student-academic-yr.interface';
import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Candidate } from 'src/interfaces/candidate.interface';

@Entity('candidate')
export class CandidateDto implements Candidate {
  @PrimaryGeneratedColumn()
  candidate_id?: number;

  @ApiProperty({ example: 'Prime Minister' })
  @Column({ length: 1000 })
  position_type: 'voter' | 'admin' | 'rep' | 'ssg';

  @ApiProperty({ example: '01' })
  @Column({ type: 'int' })
  election_id: number;

  @ApiProperty({ example: '2020' })
  @Column({ type: 'int' })
  studentAcademicYr_id: number;

  @ApiProperty({ example: 'Time is gold.' })
  @Column({ length: 1000 })
  quote: string;

  @ManyToOne(() => StudentAcademicYrDto, studentyr => studentyr.candidate)
  studentyr: StudentAcademicYrDto;
}
