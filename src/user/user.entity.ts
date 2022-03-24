import { VoterDto } from './../entities/voter.dto';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../interfaces/user.interface';

@Entity('user')
export class UserDto implements User {
  @PrimaryGeneratedColumn()
  account_id?: number;

  @ApiProperty({ default: '12291' })
  @Column({ length: 100 })
  username: string;

  @ApiProperty({ default: 'e34r' })
  @Column({ length: 100 })
  password: string;

  @ApiProperty({ default: 'voter' })
  @Column({ length: 100 })
  userType: 'voter' | 'admin' | 'rep' | 'ssg';

  @ApiProperty({ default: 'active' })
  @Column({ length: 100 })
  status: 'active' | 'disabled';

  @ApiProperty({ required: false })
  @Column({ length: 255, default: '' })
  refreshToken?: string;

  @OneToMany(() => VoterDto, (voter) => voter.user)
  voter: VoterDto;
}
