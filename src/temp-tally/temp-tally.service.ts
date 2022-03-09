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
  async findOne(account_type_id: number): Promise<TempTallyDto> {
    return this.tempTallyRepository.findOne(account_type_id);
  }
  async update(account_type_id: number, application: TempTallyDto) {
    return this.tempTallyRepository.update(account_type_id, application);
  }
  async deleteOne(account_type_id: number) {
    return this.tempTallyRepository.delete(account_type_id);
  }
}
