import { ApiProperty } from '@nestjs/swagger';
import { Voter } from '../interfaces/voter.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @ApiProperty({ example: '201812291' })
  @Column()
  account_id: number;

  @ApiProperty({ example: 'February 12,2022' })
  @Column({ length: 100 })
  date: string;
}
