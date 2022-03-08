import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from '../entities/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserDto)
    private usersRepository: Repository<UserDto>,
  ) {}

  async create(application: UserDto): Promise<UserDto> {
    return this.usersRepository.save(application);
  }
  async findAll(): Promise<UserDto[]> {
    return this.usersRepository.find();
  }
  async findOne(account_id: number): Promise<UserDto> {
    return this.usersRepository.findOne(account_id);
  }
  async update(account_id: number, application: UserDto) {
    return this.usersRepository.update(account_id, application);
  }
  async deleteOne(account_id: number) {
    return this.usersRepository.delete(account_id);
  }
}
