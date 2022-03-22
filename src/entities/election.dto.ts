import { VoterDto } from 'src/entities/voter.dto';
import {
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Election } from 'src/interfaces/election.interface';
import { TempTallyDto } from './temp-tally.dto';

@Entity('election')
export class ElectionDto implements Election {
  @PrimaryGeneratedColumn()
  election_id?: number;

  @ApiProperty({ example: 'February 12, 2022' })
  @Column({ length: 100 })
  election_name: string;

  @ApiProperty({ example: 'February 12, 2022' })
  @Column({ length: 100 })
  start_date: string;

  @ApiProperty({ example: '8:00 PM' })
  @Column({ length: 100 })
  start_time: string;

  @ApiProperty({ example: 'February 12, 2022' })
  @Column({ length: 100 })
  end_date: string;

  @ApiProperty({ example: '8:00 PM' })
  @Column({ length: 100 })
  end_time: string;

  @ManyToOne(() => VoterDto, (voter) => voter.election)
  voter: VoterDto[];

  @OneToMany(() => TempTallyDto, (temptally) => temptally.election)
  temptally: TempTallyDto;
}
