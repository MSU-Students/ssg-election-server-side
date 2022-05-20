import { CandidateDto } from 'src/entities/candidate.dto';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Student } from '../interfaces/student.interface';
import { UserDto } from '../user/user.entity';
import { MediaDto } from './media.dto';
import { VoteRepDto } from './vote-rep.dto';
import { VoteSsgDto } from './vote-ssg.dto';
@Entity('student')
export class StudentDto implements Student {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  student_id?: number;

  @ApiProperty({ example: '01', required: false })
  @Column({ type: 'int', nullable: true })
  school_id: number;

  @ApiProperty({ example: 'Najmah' })
  @Column({ length: 100 })
  first_name: string;

  @ApiProperty({ example: 'Angni', required: false })
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

  @ApiProperty({ example: '2018' })
  @Column({ length: 100 })
  yr_admitted: string;

  @ApiProperty({ example: 'College of Information Technology' })
  @Column({ length: 100 })
  college: string;

  @ApiProperty({ example: 'BS Information Technology' })
  @Column({ length: 100 })
  course: string;

  @ApiProperty({ example: 'Department of Computing Sciences' })
  @Column({ length: 100 })
  department: string;

  @ApiProperty({ default: 'regular' })
  @Column({ length: 100 })
  student_type: 'regular' | 'representative';

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  url: number;

  //1-to-1 Account
  @ApiProperty({ required: false, type: () => UserDto })
  @OneToMany(() => UserDto, (user) => user.student, { onDelete: 'CASCADE' })
  user: UserDto[];

  //not necessary, for relation only
  @OneToMany(() => CandidateDto, (candidate) => candidate.student)
  candidate: CandidateDto[];

  @OneToMany(() => VoteRepDto, (voterep) => voterep.student)
  voterep: VoteRepDto[];
  @OneToMany(() => VoteRepDto, (rep1) => rep1.student)
  rep1: VoteRepDto[];
  @OneToMany(() => VoteRepDto, (rep2) => rep2.student)
  rep2: VoteRepDto[];

  @OneToMany(() => VoteSsgDto, (votessg) => votessg.student)
  votessg: VoteSsgDto[];
}
