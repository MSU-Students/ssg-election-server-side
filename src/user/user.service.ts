import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './user.entity';

@Injectable()
export class UserService {
  async setCurrentRefreshToken(refreshToken: string, account_id: number) {
    const user = await this.findOne(account_id);
    if (user) {
      user.refreshToken = refreshToken;
      await this.update(account_id, user);
    }
  }
  constructor(
    @InjectRepository(UserDto)
    private usersRepository: Repository<UserDto>,
  ) {}

  async create(application: UserDto): Promise<UserDto> {
    return this.usersRepository.save(application);
  }
  async findAll(): Promise<UserDto[]> {
    return this.usersRepository.find({
      relations: ['student'],
    });
    
  }
  async findOne(account_id: number): Promise<UserDto> {
    return this.usersRepository.findOne(account_id);
  }
  async findByUsername(username: string): Promise<UserDto> {
    return this.usersRepository.findOne({ username });
  }
  async update(account_id: number, application: UserDto) {
    return this.usersRepository.update(account_id, application);
  }
  async deleteOne(account_id: number) {
    return this.usersRepository.delete(account_id);
  }
}
