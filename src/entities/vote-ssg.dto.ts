import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { VoteSsg } from 'src/interfaces/vote-ssg.interface';
import { SsgMemberDto } from './prime-minister.dto';
import { StudentDto } from './student.dto';

@Entity('Vote_SSG')
export class VoteSsgDto implements VoteSsg {
  @PrimaryGeneratedColumn()
  vote_ssg_id?: number;

  @ApiProperty({ example: 'Acsan  M. Asgar' })
  @Column({ length: 100 })
  prime_name: string;

  @ApiProperty({ example: 'Najmah A. Omar' })
  @Column({ length: 100 })
  secretary_name: string;

  @ApiProperty({ example: '4th' })
  @Column({ length: 100 })
  academic_yr: string;

  @ApiProperty({ example: 'February 28, 2022' })
  @Column({ length: 100 })
  date: string;

  @ApiProperty({ example: '12:24' })
  @Column({ length: 100 })
  time: string;

  @ManyToMany(() => SsgMemberDto, (prime) => prime.voterep)
  @JoinColumn({ name: 'ssg_id' })
  prime: SsgMemberDto[];

  @ManyToOne(() => StudentDto, (student) => student.votessg)
  @JoinColumn({ name: 'student_id' })
  student: StudentDto;
}
