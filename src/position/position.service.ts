import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PositionDto } from 'src/entities/position.dto';

@Injectable()
export class PositionService {
  constructor(
    @InjectRepository(PositionDto)
    private positionRepository: Repository<PositionDto>,
  ) {}

  async create(application: PositionDto): Promise<PositionDto> {
    return this.positionRepository.save(application);
  }
  async findAll(): Promise<PositionDto[]> {
    return this.positionRepository.find({
      relations: ['student '],
    });
  }
  async findOne(position_id: number): Promise<PositionDto> {
    return this.positionRepository.findOne(position_id);
  }
  async update(position_id: number, application: PositionDto) {
    return this.positionRepository.update(position_id, application);
  }
  async delete(position_id: number) {
    return this.positionRepository.delete(position_id);
  }
}
