import { StudentDto } from 'src/entities/student.dto';
import { ElectionDto } from 'src/entities/election.dto';

import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToOne,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Candidate } from 'src/interfaces/candidate.interface';

@Entity('candidate')
export class CandidateDto implements Candidate {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  candidate_id?: number;

  @ApiProperty({ example: 'Prime Minister' })
  @Column({ length: 1000 })
  position_type: 'voter' | 'admin' | 'rep' | 'ssg';

  @ApiProperty({ example: 'Time is gold.' })
  @Column({ length: 1000 })
  platform: string;

  //Relations
  @OneToOne(() => ElectionDto)
  @JoinColumn({ name: 'election_id' })
  election: ElectionDto;
  @ApiProperty()
  @Column({ nullable: true })
  public election_id?: number;

  @OneToOne(() => StudentDto)
  @JoinColumn({ name: 'student_id' })
  student: StudentDto;
  @ApiProperty()
  @Column({ nullable: true })
  public student_id?: number;
}
