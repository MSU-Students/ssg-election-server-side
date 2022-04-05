import { AdminDto } from 'src/entities/admin.dto';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Election } from 'src/interfaces/election.interface';

@Entity('election')
export class ElectionDto implements Election {
  @PrimaryGeneratedColumn()
  election_id?: number;

  @ApiProperty({ example: 'February 12, 2022' })
  @Column({ length: 100 })
  election_name: string;

  @ApiProperty({ example: '2021' })
  @Column({ length: 50 })
  academic_yr: string;

  @ApiProperty({ example: 'February 12, 2022' })
  @Column({ length: 100 })
  start_date: string;

  @ApiProperty({ example: '8:00 PM' })
  @Column({ length: 100 })
  start_time: string;

  @ApiProperty({ example: 'February 12, 2022' })
  @Column({ length: 100 })
  end_date: string;

  @ApiProperty({ example: '8:00 PM' })
  @Column({ length: 100 })
  end_time: string;

  @OneToOne(() => AdminDto)
  @JoinColumn({ name: 'admin_id' })
  admin: AdminDto;
  @ApiProperty()
  @Column({ nullable: true })
  public admin_id?: number;
}
