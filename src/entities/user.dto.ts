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
    account_id?: number;

    @ApiProperty({ example: '01' })
    @Column()
    account_type_id: number;

    @ApiProperty({ example: '12291' })
    @Column({ length: 100 })
    username: string;

    @ApiProperty({ example: 'e34r' })
    @Column({ length: 100 })
    password: string;
}
