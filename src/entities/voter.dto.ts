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

@Entity('Voter')
export class VoterDto implements Voter {
  @PrimaryGeneratedColumn()
  voter_id?: number;

  @ApiProperty({ example: '123' })
  @Column()
  candidate_id: number;

  @ApiProperty({ example: '01' })
  @Column()
  election_id: number;

  @ApiProperty({ example: 'February 12,2022' })
  @Column({ length: 100 })
  date: string;


  @ManyToOne(() => ElectionDto, election => election.voter)
  election: ElectionDto;
}
