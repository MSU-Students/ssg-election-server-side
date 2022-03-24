import { TempTallyDto } from './../entities/temp-tally.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TempTallyService {
  constructor(
    @InjectRepository(TempTallyDto)
    private tempTallyRepository: Repository<TempTallyDto>,
  ) {}

  async create(application: TempTallyDto): Promise<TempTallyDto> {
    return this.tempTallyRepository.save(application);
  }
  async findAll(): Promise<TempTallyDto[]> {
    return this.tempTallyRepository.find();
  }
  async findOne(temp_tally_id: number): Promise<TempTallyDto> {
    return this.tempTallyRepository.findOne(temp_tally_id);
  }
  async update(temp_tally_id: number, application: TempTallyDto) {
    return this.tempTallyRepository.update(temp_tally_id, application);
  }
  async deleteOne(temp_tally_id: number) {
    return this.tempTallyRepository.delete(temp_tally_id);
  }
}
