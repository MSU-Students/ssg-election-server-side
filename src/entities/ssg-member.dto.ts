import { ElectionDto } from 'src/entities/election.dto';
import {
  Column,
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { SsgMember } from 'src/interfaces/ssg-member.interface';
import { VoteRepDto } from './vote-rep.dto';

@Entity('SSG_Member')
export class SsgMemberDto implements SsgMember {
  @PrimaryGeneratedColumn()
  ssg_id?: number;

  @ApiProperty({ example: '2018' })
  @Column({ length: 100 })
  academic_yr: string;

  @ApiProperty({ example: 'Chief Executive' })
  @Column({ length: 100 })
  position: string;

  @OneToOne(() => ElectionDto)
  @JoinColumn({ name: 'election_id' })
  user: ElectionDto;
  @ApiProperty()
  @Column({ nullable: true })
  public election_id?: number;

  @ManyToMany(() => VoteRepDto, (voterep) => voterep.prime)
  voterep: VoteRepDto[];
}
