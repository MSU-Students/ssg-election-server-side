import { SsgMemberDto } from 'src/entities/ssg-member.dto';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { VoteRep } from 'src/interfaces/vote-rep.interface';
import { RepresentativeDto } from './representative.dto';
import { StudentDto } from './student.dto';

@Entity('Vote_Rep')
export class VoteRepDto implements VoteRep {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  vote_rep_id?: number;

  @ApiProperty({ type: () => StudentDto })
  @ManyToOne(() => StudentDto, (rep1) => rep1.rep2Info)
  rep1: StudentDto;

  @ApiProperty({ type: () => StudentDto })
  @ManyToOne(() => StudentDto, (rep2) => rep2.rep2Info)
  rep2: StudentDto;

  @ApiProperty({ example: '4th' })
  @Column({ length: 100 })
  academic_yr: string;

  @ApiProperty({ example: 'February 28, 2022' })
  @Column({ length: 100 })
  date: string;

  @ApiProperty({ example: '12:24' })
  @Column({ length: 100 })
  time: string;

  @ApiProperty({ required: false, type: () => StudentDto })
  @ManyToOne(() => StudentDto, (student) => student.voterep, { nullable: true })
  student: StudentDto;

  //for relation only
  @ManyToOne(
    () => RepresentativeDto,
    (representative) => representative.voterep,
    { nullable: true },
  )
  representative: RepresentativeDto;

  
}
