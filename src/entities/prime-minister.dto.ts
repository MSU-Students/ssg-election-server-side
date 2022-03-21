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

  @ApiProperty({ example: '01' })
  @Column()
  election_id: number;

  @OneToOne(() => ElectionDto)
  @JoinColumn()
  user: ElectionDto;

}
