import { PrimeMinisterDto } from './prime-minister.dto';
import { Representative } from '../interfaces/representative.interface';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, PrimaryGeneratedColumn, OneToOne} from 'typeorm';
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
}
