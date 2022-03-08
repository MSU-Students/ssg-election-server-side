import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountTypeDto } from 'src/entities/account-type.dto';

@Injectable()
export class AccountTypeService{
    constructor(
        @InjectRepository(AccountTypeDto)
        private AccountTypeRepository: Repository<AccountTypeDto>,
      ) {}
    
      async create(application: AccountTypeDto): Promise<AccountTypeDto> {
        return this.AccountTypeRepository.save(application);
      }
      async findAll(): Promise<AccountTypeDto[]> {
        return this.AccountTypeRepository.find();
      }
      async findOne(account_id: number): Promise<AccountTypeDto> {
        return this.AccountTypeRepository.findOne(account_id);
      }
      async update(account_id: number, application: AccountTypeDto) {
        return this.AccountTypeRepository.update(account_id, application);
      }
      async deleteOne(account_id: number) {
        return this.AccountTypeRepository.delete(account_id);
      }
}
