import { ApiProperty } from '@nestjs/swagger';
import { AccountType } from 'src/interfaces/account-type.interface';
import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('account-type')
export class AccountTypeDto {
  @PrimaryGeneratedColumn()
  account_type_id: number;

  @ApiProperty({ example: 'voter' })
  @Column({ length: 100 })
  account_type: string;
}
