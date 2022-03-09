import { Representative } from '../interfaces/representative.interface';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Representative')
export class RepresentativeDto implements Representative {
  @PrimaryGeneratedColumn()
  representative_id?: number;

  @ApiProperty({ example: '1331' })
  @Column({ type: 'int' })
  primeMinister_id: number;

  @ApiProperty({ example: '201812291' })
  @Column({ type: 'int' })
  voter_id: number;
}
