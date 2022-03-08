import { Representative } from '../interfaces/representative.interface';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Representative')
export class RepresentativeDto implements Representative{
    @PrimaryGeneratedColumn()
    representative_id?: number;
  
    @ApiProperty({ example: '1331' })
    @Column()
    primeMinister_id: number;
  
    @ApiProperty({ example: '201812291' })
    @Column()
    voter_id: number;
}
