import { ApiProperty } from "@nestjs/swagger";
import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity ('account-type')
export class AccountTypeDto {
    @PrimaryGeneratedColumn()
    account_type_id: number;

    @ApiProperty({ example: 'voter' })
    @Column({ length: 100 })
    account_type: string;

}
