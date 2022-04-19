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
} from 'typeorm';
import { VoteRepDto } from './vote-rep.dto';
@Entity('Representative')
export class RepresentativeDto implements Representative {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  representative_id?: number;

  @ApiProperty({ example: 'College of Information Technology' })
  @Column({ length: 100 })
  academic_yr: string;

  @ApiProperty({ example: 'College of Information Technology' })
  @Column({ length: 100 })
  position: string;

  //Relations
  @ApiProperty({ required: false, type: () => VoteRepDto })
  @OneToMany(() => VoteRepDto, (voterep) => voterep.representative, {
    nullable: true,
  })
  voterep: VoteRepDto[];
}
