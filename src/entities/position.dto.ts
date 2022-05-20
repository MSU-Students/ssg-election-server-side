import { StudentDto } from 'src/entities/student.dto';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Position } from 'src/interfaces/position.interface';
import { SsgMemberDto } from './ssg-member.dto';
@Entity('position')
export class PositionDto implements Position {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  position_id?: number;

  @ApiProperty({ example: 'Najmah A. Omar' })
  @Column({ length: 100 })
  chiefJustice: string;

  @ApiProperty({ example: 'Najmah A. Omar' })
  @Column({ length: 100 })
  associateJustice: string;

  @ApiProperty({ example: 'Najmah A. Omar' })
  @Column({ length: 100 })
  speakerHouse: string;

  @ApiProperty({ example: 'Najmah A. Omar' })
  @Column({ length: 100 })
  internalDeputy: string;

  @ApiProperty({ example: 'Najmah A. Omar' })
  @Column({ length: 100 })
  externalDeputy: string;

  @ApiProperty({ example: 'Najmah A. Omar' })
  @Column({ length: 100 })
  ministerHealth: string;

  @ApiProperty({ example: 'Najmah A. Omar' })
  @Column({ length: 100 })
  ministerInfo: string;

  @ApiProperty({ example: 'Najmah A. Omar' })
  @Column({ length: 100 })
  ministerPlanning: string;

  @ApiProperty({ example: 'Najmah A. Omar' })
  @Column({ length: 100 })
  ministerAcadAffairs: string;

  @ApiProperty({ example: 'Najmah A. Omar' })
  @Column({ length: 100 })
  ministerFinance: string;

  @ApiProperty({ example: 'Najmah A. Omar' })
  @Column({ length: 100 })
  commissionAudit: string;

  @ApiProperty({ example: 'Najmah A. Omar' })
  @Column({ length: 100 })
  commissionElection: string;

  @ApiProperty({ example: 'Najmah A. Omar' })
  @Column({ length: 100 })
  commissionWelfare: string;

  @ApiProperty({ required: false, type: () => StudentDto })
  @ManyToOne(() => StudentDto, (student) => student.position, {
    nullable: true,
  })
  student: StudentDto;
}
