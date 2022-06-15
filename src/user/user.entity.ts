import { CandidateDto } from './../entities/candidate.dto';
import { RepresentativeDto } from './../entities/representative.dto';
import { AdminDto } from 'src/entities/admin.dto';
import { VoteSsgDto } from './../entities/vote-ssg.dto';
import { VoteRepDto } from 'src/entities/vote-rep.dto';
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

  @ManyToOne(() => CandidateDto, (candidate) => candidate.user, {
    onDelete: 'CASCADE',
    eager: true,
  })
  candidate: CandidateDto;

  @ApiProperty({ required: false, type: () => StudentDto })
  @ManyToOne(() => StudentDto, (student) => student.user, {
    onDelete: 'CASCADE',
    eager: true,
  })
  student: StudentDto;

  @ApiProperty({ required: false, type: () => AdminDto })
  @ManyToOne(() => AdminDto, (admin) => admin.user)
  admin: AdminDto;

  @ApiProperty({ type: () => VoteRepDto })
  @ApiProperty({ required: false, type: VoteRepDto })
  vote: VoteRepDto;

  @ApiProperty({ required: false, type: VoteSsgDto })
  votessg: VoteSsgDto;
}
