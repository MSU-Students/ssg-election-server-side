import { VoterDto } from 'src/entities/voter.dto';
import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Election } from 'src/interfaces/election.interface';

@Entity('election')
export class ElectionDto implements Election {
  @PrimaryGeneratedColumn()
  election_id?: number;

  @ApiProperty({ example: 'February 12, 2022' })
  @Column({ length: 100 })
  election_date: string;

  @ApiProperty({ example: '8:00 PM' })
  @Column({ length: 100 })
  election_time: string;

  @ManyToOne(() => VoterDto, (voter) => voter.election)
  voter: VoterDto[];
}
