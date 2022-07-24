import { PositionDto } from 'src/entities/position.dto';
import { UserDto } from './../user/user.entity';
import { StudentDto } from './student.dto';
import { ElectionDto } from 'src/entities/election.dto';
import {
  Column,
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { SsgMember } from 'src/interfaces/ssg-member.interface';
import { VoteSsgDto } from './vote-ssg.dto';

@Entity('SSG_Member')
export class SsgMemberDto implements SsgMember {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  ssg_id?: number;

  @ApiProperty({ example: '2018', required: false })
  @Column({ length: 100, nullable: true })
  academic_yr: string;

  @ApiProperty({ example: 'Chief Executive' })
  @Column({ length: 100 })
  position: string;

  @ApiProperty({ required: false, type: () => StudentDto })
  @ManyToOne(() => StudentDto, (student) => student.ssg)
  student: StudentDto;

  @ApiProperty({ required: false, type: () => UserDto })
  @ManyToOne(() => UserDto, (user) => user.ssg, { nullable: true })
  user: UserDto;

  @OneToMany(() => PositionDto, (positiontype) => positiontype.ssgMember)
  positiontype: PositionDto[];
}
