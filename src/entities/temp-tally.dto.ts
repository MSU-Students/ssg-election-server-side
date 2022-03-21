import { CandidateDto } from 'src/entities/candidate.dto';
import { Candidate } from 'src/interfaces/candidate.interface';
import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { TempTally } from 'src/interfaces/temp-tally.interface';

@Entity('temp_tally')
export class TempTallyDto implements TempTally {
  @PrimaryGeneratedColumn()
  temp_tally?: number;

  @ApiProperty({ example: '01' })
  @Column({ type: 'int' })
  candidate_id: number;

  @ApiProperty({ example: '01' })
  @Column({ type: 'int' })
  election_id: number;

  @OneToOne(() => CandidateDto)
  @JoinColumn({name: 'candidate_id'})
  candidate: CandidateDto;
}
