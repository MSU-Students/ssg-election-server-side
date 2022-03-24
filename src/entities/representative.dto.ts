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

  @OneToOne(() => PrimeMinisterDto)
  @JoinColumn({ name: 'primeMinister_id' })
  Account: PrimeMinisterDto;

  @ApiProperty()
  @Column()
  primeMinister_id: number;

  @OneToMany(() => VoterDto, (voter) => voter.rep)
  @JoinColumn({name: 'voter_id'})
  voter: VoterDto[];
}
