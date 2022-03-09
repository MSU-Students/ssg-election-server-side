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

  @ApiProperty()
  @Column({ type: 'int' })
  election_sem: number;

  @ApiProperty({ example: '2020' })
  @Column({ type: 'int' })
  election_year: number;

  @ApiProperty({ example: '2021' })
  @Column({ type: 'date' })
  election_date: number;

  @ApiProperty({ example: '8' })
  @Column({ type: 'time' })
  election_time: number;
}
