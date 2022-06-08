import { ElectionDto } from './election.dto';
import { StudentDto } from './student.dto';
import { CandidateDto } from './candidate.dto';
import { SsgMemberDto } from './ssg-member.dto';
import { Representative } from '../interfaces/representative.interface';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { VoteRepDto } from './vote-rep.dto';
@Entity('representative')
export class RepresentativeDto implements Representative {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  representative_id?: number;

  @ApiProperty({ example: 'Representative' })
  @Column({ length: 100 , nullable: true})
  position: string;

  @ApiProperty({ example: 'Time is gold.' })
  @Column({ length: 1000 , nullable: true})
  platform: string;

  //Relations
  // @ApiProperty({ required: false, type: () => CandidateDto })
  // @ManyToOne(() => CandidateDto, (candidate) => candidate.rep)
  // candidate: CandidateDto;
  
  @ApiProperty({ required: false, type: () => StudentDto })
  @ManyToOne(() => StudentDto, (student) => student.rep)
  student: StudentDto;

  @ApiProperty({ required: false, type: () => ElectionDto })
  @ManyToOne(() => ElectionDto, (election) => election.rep)
  election: ElectionDto;

  // @ApiProperty({ required: false, type: () => VoteRepDto })
  // @OneToMany(() => VoteRepDto, (voterep) => voterep.rep)
  // voterep: VoteRepDto;
}
