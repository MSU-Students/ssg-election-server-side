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

  @ApiProperty({ type: () => StudentDto })
  @ManyToOne(() => StudentDto, (chiefJustice) => chiefJustice.chief)
  chiefJustice: StudentDto;

  @ApiProperty({ type: () => StudentDto })
  @ManyToOne(() => StudentDto, (associateJustice) => associateJustice.associate)
  associateJustice: StudentDto;

  @ApiProperty({ type: () => StudentDto })
  @ManyToOne(() => StudentDto, (speakerHouse) => speakerHouse.speaker)
  speakerHouse: string;

  @ApiProperty({ type: () => StudentDto })
  @ManyToOne(() => StudentDto, (internalDeputy) => internalDeputy.internal)
  internalDeputy: string;

  @ApiProperty({ type: () => StudentDto })
  @ManyToOne(() => StudentDto, (externalDeputy) => externalDeputy.external)
  externalDeputy: string;

  @ApiProperty({ type: () => StudentDto })
  @ManyToOne(() => StudentDto, (ministerHealth) => ministerHealth.health)
  ministerHealth: string;

  @ApiProperty({ type: () => StudentDto })
  @ManyToOne(() => StudentDto, (ministerInfo) => ministerInfo.info)
  ministerInfo: string;

  @ApiProperty({ type: () => StudentDto })
  @ManyToOne(() => StudentDto, (ministerPlanning) => ministerPlanning.planning)
  ministerPlanning: string;

  @ApiProperty({ type: () => StudentDto })
  @ManyToOne(() => StudentDto, (ministerAcadAffairs) => ministerAcadAffairs.acadAffairs)
  ministerAcadAffairs: string;

  @ApiProperty({ type: () => StudentDto })
  @ManyToOne(() => StudentDto, (ministerFinance) => ministerFinance.finance)
  ministerFinance: string;

  @ApiProperty({ type: () => StudentDto })
  @ManyToOne(() => StudentDto, (commissionAudit) => commissionAudit.audit)
  commissionAudit: string;

  @ApiProperty({ type: () => StudentDto })
  @ManyToOne(() => StudentDto, (commissionElection) => commissionElection.election)
  commissionElection: string;

  @ApiProperty({ type: () => StudentDto })
  @ManyToOne(() => StudentDto, (commissionWelfare) => commissionWelfare.welfare)
  commissionWelfare: string;

  @ApiProperty({ required: false, type: () => SsgMemberDto })
  @ManyToOne(() => SsgMemberDto, (ssgMember) => ssgMember.positiontype, {
    nullable: true,
  })
  ssgMember: SsgMemberDto;
}
