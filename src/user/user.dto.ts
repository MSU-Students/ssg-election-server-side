import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export interface IUser {
  account_id?: number;
  username?: string;
  password?: string;
  status: 'active' | 'disabled';
  userType: string;
}

export class RegisterUserDto implements IUser {
  @PrimaryGeneratedColumn()
  account_id?: number;

  @ApiProperty({ example: 'user' })
  @Column({ length: 100 })
  username?: string;

  @ApiProperty({ example: 'user' })
  @Column({ length: 100 })
  password?: string;

  @ApiProperty({ default: 'active' })
  @Column({ length: 100 })
  status: 'active' | 'disabled';

  @ApiProperty({ default: 'voter' })
  @Column({ length: 100 })
  userType: 'voter' | 'admin' | 'rep' | 'ssg';
}

export class LoginUserDto implements IUser {
  userType: string;
  account_id?: number;
  @ApiProperty()
  username?: string;
  @ApiProperty()
  password?: string;
  status: 'active' | 'disabled';
}

export class RefreshDto {
  @ApiProperty({
    required: true,
    minLength: 5,
  })
  refresh_token: string;
}

export class AccessTokenDto {
  @ApiProperty({
    required: false,
    minLength: 5,
  })
  accessToken?: string;
  @ApiProperty({
    required: false,
    minLength: 5,
  })
  refreshToken?: string;
}
