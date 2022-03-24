import { ElectionDto } from 'src/entities/election.dto';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { PrimeMinister } from 'src/interfaces/prime-minister.interface';
import { VoterDto } from './voter.dto';

@Entity('prime_minister')
export class PrimeMinisterDto implements PrimeMinister {
  @PrimaryGeneratedColumn()
  primeMinister_id?: number;

  @OneToOne(() => ElectionDto)
  @JoinColumn({ name: 'election_id' })
  user: ElectionDto;

  @ApiProperty()
  @Column()
  election_id: number;
}
