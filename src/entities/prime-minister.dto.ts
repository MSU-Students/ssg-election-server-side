import {
    Column,
    Entity,
    Generated,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { ApiProperty } from '@nestjs/swagger';
  import { PrimeMinister } from 'src/interfaces/prime-minister.interface';
  
  @Entity ('prime_minister')
  export class PrimeMinisterDto implements PrimeMinister {
    @PrimaryGeneratedColumn()
    primeMinister_id?: number;

    @ApiProperty({ example: '01' })
    @Column()
    election_id: number;
  }
