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

  @ApiProperty({})
  @Column({ length: 100 })
  academic_yr: string;

  @ApiProperty({ example: 'Representative' })
  @Column({ length: 100 })
  position: string;

  @ApiProperty({ example: 'Time is gold.' })
  @Column({ length: 1000 })
  platform: string;

  @ApiProperty({ required: false, type: () => CandidateDto })
  @ManyToOne(() => CandidateDto, (candidate) => candidate.rep)
  candidate: CandidateDto;

  //Relations
  @ApiProperty({ required: false, type: () => VoteRepDto })
  @OneToMany(() => VoteRepDto, (voterep) => voterep.representative, {
    nullable: true,
  })
  voterep: VoteRepDto[];
}
