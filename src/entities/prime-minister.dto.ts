import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToMany,
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
  @Column({ type: 'int' })
  election_id: number;

  @OneToMany(() => VoterDto, (voter) => voter.prime)
  voter: VoterDto[];
}
