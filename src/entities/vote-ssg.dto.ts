import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { VoteSsg } from 'src/interfaces/vote-ssg.interface';
import { SsgMemberDto } from './ssg-member.dto';
import { StudentDto } from './student.dto';

@Entity('Vote_SSG')
export class VoteSsgDto implements VoteSsg {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  vote_ssg_id?: number;

  @ApiProperty({ example: 'February 28, 2022' })
  @Column({ length: 100 })
  date: string;

  @ApiProperty({ example: '12:24' })
  @Column({ length: 100 })
  time: string;

  @ApiProperty({ required: false, type: () => StudentDto })
  @ManyToOne(() => StudentDto, (prime) => prime.primeInfo)
  prime: StudentDto;

  @ApiProperty({ required: false, type: () => StudentDto })
  @ManyToOne(() => StudentDto, (secretary) => secretary.secretaryInfo)
  secretary: StudentDto;

  @ApiProperty({ required: false, type: () => StudentDto })
  @ManyToOne(() => StudentDto, (student) => student.votessg, { nullable: true })
  student: StudentDto;
}
