import { CandidateDto } from './candidate.dto';
import { AdminDto } from 'src/entities/admin.dto';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Election } from 'src/interfaces/election.interface';

@Entity('election')
export class ElectionDto implements Election {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  election_id?: number;

  @ApiProperty({ example: 'Election for SSG 2022' })
  @Column({ length: 100 })
  election_name: string;

  @ApiProperty({ default: 'regular' })
  @Column({ length: 100 })
  election_type: 'College Representative' | 'SSG Officers';

  @ApiProperty({ example: '2021' })
  @Column({ length: 50 })
  academic_yr: string;

  @ApiProperty({ example: 'February 12, 2022' })
  @Column({ length: 100 })
  start_date: string;

  @ApiProperty({ example: '8:00 AM' })
  @Column({ length: 100 })
  start_time: string;

  @ApiProperty({ example: 'February 12, 2022' })
  @Column({ length: 100 })
  end_date: string;

  @ApiProperty({ example: '8:00 PM' })
  @Column({ length: 100 })
  end_time: string;

  @ApiProperty({ example: 'Active' })
  @Column({ length: 100 })
  status: string;

  @OneToMany(() => CandidateDto, (candidate) => candidate.election)
  candidate: CandidateDto[];

  @OneToMany(() => CandidateDto, (voterep) => voterep.election)
  voterep: CandidateDto[];
  
}
