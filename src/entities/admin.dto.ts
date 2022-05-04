import { ElectionDto } from 'src/entities/election.dto';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Admin } from 'src/interfaces/admin.interface';
@Entity('admin')
export class AdminDto implements Admin {
  @PrimaryGeneratedColumn()
  admin_id?: number;

  @ApiProperty({ example: 'Najmah' })
  @Column({ length: 100 })
  first_name: string;

  @ApiProperty({ example: 'Omar' })
  @Column({ length: 100 })
  last_name: string;

  @ApiProperty({ example: 'Admin' })
  @Column({ length: 100 })
  position: string;

}
