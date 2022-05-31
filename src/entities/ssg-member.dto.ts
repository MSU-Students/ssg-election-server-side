import { ElectionDto } from 'src/entities/election.dto';
import {
  Column,
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { SsgMember } from 'src/interfaces/ssg-member.interface';
import { VoteSsgDto } from './vote-ssg.dto';

@Entity('SSG_Member')
export class SsgMemberDto implements SsgMember {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  ssg_id?: number;

  @ApiProperty({ example: '2018' })
  @Column({ length: 100 })
  academic_yr: string;

  @ApiProperty({ example: 'Chief Executive' })
  @Column({ length: 100 })
  position: string;

  @ApiProperty({ required: false, type: () => VoteSsgDto })
  @ManyToMany(() => VoteSsgDto, (votessg) => votessg.primeMinister, { nullable: true })
  @JoinTable()
  votessg: VoteSsgDto[];
}
