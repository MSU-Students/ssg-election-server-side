import { RepresentativeDto } from 'src/entities/representative.dto';
import { Representative } from './../interfaces/representative.interface';
import { StudentDto } from 'src/entities/student.dto';
import { ElectionDto } from 'src/entities/election.dto';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Candidate } from 'src/interfaces/candidate.interface';

@Entity('candidate')
export class CandidateDto implements Candidate {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  candidate_id?: number;

  @ApiProperty({ default: 'Prime' })
  @Column({ length: 100 })
  position_type: string;

  @ApiProperty({ example: 'Time is gold.' })
  @Column({ length: 1000 })
  platform: string;

  //Relations
  @ApiProperty({ required: false, type: () => ElectionDto })
  @ManyToOne(() => ElectionDto, (election) => election.candidate)
  election: ElectionDto;

  @ApiProperty({ required: false, type: () => StudentDto })
  @ManyToOne(() => StudentDto, (student) => student.candidate)
  student: StudentDto;
  
  @ManyToOne(() => RepresentativeDto, (rep) => rep.candidate)
  rep: RepresentativeDto;
}
