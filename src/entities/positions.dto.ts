import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Positions } from 'src/interfaces/positions.interface';

@Entity('positions')
export class PositionsDto implements Positions {
  @PrimaryGeneratedColumn()
  position_id?: number;

  @ApiProperty({ example: 'Representative' })
  @Column({ length: 50 })
  type: string;
}
