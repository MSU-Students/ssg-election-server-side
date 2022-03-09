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

  @ApiProperty()
  @Column({ type: 'int' })
  position_id: number;

  @ApiProperty({ example: '01' })
  @Column({ type: 'int' })
  election_id: number;

  @ApiProperty({ example: '2020' })
  @Column({ type: 'int' })
  studentAcademicYr_id: number;
}
