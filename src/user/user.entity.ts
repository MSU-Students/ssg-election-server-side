import { StudentDto } from 'src/entities/student.dto';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../interfaces/user.interface';

@Entity('user')
export class UserDto implements User {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  account_id?: number;

  @ApiProperty({ default: '12291' })
  @Column({ length: 100 })
  username: string;

  @ApiProperty({ default: 'e34r' })
  @Column({ length: 100 })
  password: string;

  @ApiProperty({ default: 'voter' })
  @Column({ length: 100 })
  userType: 'voter' | 'admin' | 'rep' | 'ssg';

  @ApiProperty({ default: 'active' })
  @Column({ length: 100 })
  status: 'active' | 'disabled';

  @ApiProperty({ required: false })
  @Column({ length: 255, default: '' })
  refreshToken?: string;

  @ApiProperty({ required: false, type: () => StudentDto })
  @ManyToOne(() => StudentDto, (student) => student.user, { onDelete: 'CASCADE' })
  student: StudentDto;
}
