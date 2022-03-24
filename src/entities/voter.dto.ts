import { UserDto } from './../user/user.entity';
import { CandidateDto } from 'src/entities/candidate.dto';
import { ElectionDto } from 'src/entities/election.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Voter } from '../interfaces/voter.interface';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { PrimeMinisterDto } from './prime-minister.dto';
import { RepresentativeDto } from './representative.dto';

@Entity('Voter')
export class VoterDto implements Voter {
  @PrimaryGeneratedColumn()
  voter_id?: number;

  @ApiProperty({ example: 'February 12,2022' })
  @Column({ length: 100 })
  date: string;

  @ManyToOne(() => CandidateDto, (candidate) => candidate.voter)
  @JoinColumn({name: 'candidate_id'})
  candidate: CandidateDto[];

  @ManyToOne(() => UserDto, (user) => user.voter)
  @JoinColumn({name: 'account_id'})
  user: UserDto[];

  @ManyToOne(() => ElectionDto, (election) => election.voter)
  @JoinColumn({name: 'election_id'})
  election: ElectionDto[];

  @ManyToOne(() => RepresentativeDto, (rep) => rep.voter)
  rep: RepresentativeDto[];
}
