import { PrimeMinisterDto } from './prime-minister.dto';
import { Representative } from '../interfaces/representative.interface';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { VoterDto } from './voter.dto';
@Entity('Representative')
export class RepresentativeDto implements Representative {
  @PrimaryGeneratedColumn()
  representative_id?: number;

  @ApiProperty({ example: '201812291' })
  @Column()
  voter_id: number;

  @OneToOne(() => PrimeMinisterDto)
  @JoinColumn({ name: 'primeMinister_id' })
  Account: PrimeMinisterDto;

  @OneToMany(() => VoterDto, (voter) => voter.rep)
  voter: VoterDto[];
}
