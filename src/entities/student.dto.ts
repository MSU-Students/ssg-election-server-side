import { StudentAcademicYrDto } from 'src/entities/student-academic-yr.dto';
import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Student } from '../interfaces/student.interface';
import { UserDto } from '../user/user.entity';
import { MediaDto } from './media.dto';
@Entity('student')
export class StudentDto implements Student {
  @PrimaryGeneratedColumn()
  student_id?: number;

  @ApiProperty({ example: '01' })
  @Column({ type: 'int' })
  account_id: number;

  @ApiProperty({ example: '01' })
  @Column({ type: 'int' })
  school_id: number;

  @ApiProperty({ example: 'Najmah' })
  @Column({ length: 100 })
  first_name: string;

  @ApiProperty({ example: 'Angni' })
  @Column({ length: 100 })
  middle_name: string;

  @ApiProperty({ example: 'Omar' })
  @Column({ length: 100 })
  last_name: string;

  @ApiProperty({ default: '', required: false })
  @Column({ length: 100, nullable: true })
  suffix: string;

  @ApiProperty({ default: 'najmahomar@gmail.com', required: false })
  @Column({ length: 100, nullable: true })
  email: string;

  @OneToOne(() => UserDto)
  @JoinColumn({ name: 'user_id' })
  user: UserDto;

  @OneToOne(() => MediaDto)
  @JoinColumn({ name: 'picture_id' })
  media: MediaDto;

  @ManyToOne(() => StudentAcademicYrDto, (studentyr) => studentyr.student)
  studentyr: StudentAcademicYrDto[];
}
