import { SsgMemberDto } from 'src/entities/prime-minister.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { VoteRep } from 'src/interfaces/vote-rep.interface';
import { RepresentativeDto } from './representative.dto';
import { StudentDto } from './student.dto';

@Entity('Vote_Rep')
export class VoteRepDto implements VoteRep {
  @PrimaryGeneratedColumn()
  vote_rep_id?: number;

  @ApiProperty({ example: 'Acsan  M. Asgar' })
  @Column({ length: 100 })
  rep1_name: string;

  @ApiProperty({ example: 'Najmah A. Omar' })
  @Column({ length: 100 })
  rep2_name: string;

  @ApiProperty({ example: '4th' })
  @Column({ length: 100 })
  academic_yr: string;

  @ApiProperty({ example: 'February 28, 2022' })
  @Column({ length: 100 })
  date: string;

  @ApiProperty({ example: '12:24' })
  @Column({ length: 100 })
  time: string;

  @ManyToOne(() => RepresentativeDto, (representative) => representative.voterep)
  @JoinColumn({ name: 'representative_id' })
  representative: RepresentativeDto;

  @ManyToOne(() => StudentDto, (student) => student.voterep)
  @JoinColumn({ name: 'student_id' })
  student: StudentDto;

  @ManyToMany(() => SsgMemberDto)
  @JoinColumn({ name: 'ssg_id' })
  prime: SsgMemberDto[];
}
