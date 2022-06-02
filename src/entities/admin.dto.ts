import { UserDto } from './../user/user.entity';
import { ElectionDto } from 'src/entities/election.dto';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Admin } from 'src/interfaces/admin.interface';
@Entity('admin')
export class AdminDto implements Admin {
  @ApiProperty({ required: false })
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

  @ApiProperty({ required: false, type: () => UserDto })
  @OneToMany(() => UserDto, (user) => user.admin, { onDelete: 'CASCADE'})
  user: UserDto[];
}
