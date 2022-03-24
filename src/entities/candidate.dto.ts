import { VoterDto } from 'src/entities/voter.dto';
import { StudentAcademicYrDto } from 'src/entities/student-academic-yr.dto';
import {
  Column,
  Entity,
  OneToMany,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Candidate } from 'src/interfaces/candidate.interface';

@Entity('candidate')
export class CandidateDto implements Candidate {
  @PrimaryGeneratedColumn()
  candidate_id?: number;

  @ApiProperty({ example: 'Prime Minister' })
  @Column({ length: 1000 })
  position_type: 'voter' | 'admin' | 'rep' | 'ssg';

  @ApiProperty({ example: 'Time is gold.' })
  @Column({ length: 1000 })
  quote: string;

  @ManyToOne(() => StudentAcademicYrDto, studentyr => studentyr.candidate)
  @JoinColumn({name: 'studentAcademicYr_id'})
  studentyr: StudentAcademicYrDto;

  @OneToMany(() => VoterDto, (voter) => voter.candidate)
  voter: VoterDto;
  
}
