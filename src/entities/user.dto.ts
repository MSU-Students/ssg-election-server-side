import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../interfaces/user.interface';

@Entity('user')
export class UserDto implements User{
    @PrimaryGeneratedColumn()
    id?: number;

    @ApiProperty({ example: 'Arifah' })
    @Column({ length: 100 })
    FName: string;

    @ApiProperty({ example: 'U' })
    @Column({ length: 100 })
    MName: string;

    @ApiProperty({ example: 'Abdubasit' })
    @Column({ length: 100 })
    LName: string;

    @ApiProperty({ example: 'admin' })
    @Column({ length: 100 })
    username: string;

    @ApiProperty({ example: 'admin' })
    @Column({ length: 100 })
    password: string;

    @ApiProperty({ example: 'voters' })
    @Column({ length: 100 })
    userType: string;
}
