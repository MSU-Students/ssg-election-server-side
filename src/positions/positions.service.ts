import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PositionsDto } from 'src/entities/positions.dto';

@Injectable()
export class PositionsService {
  constructor(
    @InjectRepository(PositionsDto)
    private positionsRepository: Repository<PositionsDto>,
  ) {}

  async create(application: PositionsDto): Promise<PositionsDto> {
    return this.positionsRepository.save(application);
  }
  async findAll(): Promise<PositionsDto[]> {
    return this.positionsRepository.find();
  }
  async findOne(positions_id: number): Promise<PositionsDto> {
    return this.positionsRepository.findOne(positions_id);
  }
  async update(positions_id: number, application: PositionsDto) {
    return this.positionsRepository.update(positions_id, application);
  }
  async deleteOne(positions_id: number) {
    return this.positionsRepository.delete(positions_id);
  }
}
