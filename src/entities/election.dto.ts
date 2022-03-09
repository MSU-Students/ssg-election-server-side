import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Election } from 'src/interfaces/election.interface';

@Entity('election')
export class ElectionDto implements Election {

}
