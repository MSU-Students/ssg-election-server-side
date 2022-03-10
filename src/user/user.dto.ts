import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export interface IUser {
  account_id?: number;
  username: string;
  password: string;
  status: 'active' | 'disabled';
}

export class RegisterUserDto implements IUser {
  @PrimaryGeneratedColumn()
  account_id?: number;

  @ApiProperty({ example: '12291' })
  @Column({ length: 100 })
  username: string;

  @ApiProperty({ example: 'e34r' })
  @Column({ length: 100 })
  password: string;

  @ApiProperty({ default: 'active' })
  @Column({ length: 100 })
  status: 'active' | 'disabled';
}

export class LoginUserDto implements IUser {
  account_id?: number;
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
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
