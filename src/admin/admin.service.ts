import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminDto } from 'src/entities/admin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminDto)
    private adminRepository: Repository<AdminDto>,
  ) {}

  async create(application: AdminDto): Promise<AdminDto> {
    return this.adminRepository.save(application);
  }
  async findAll(): Promise<AdminDto[]> {
    return this.adminRepository.find();
  }
  async findOne(admin_id: number): Promise<AdminDto> {
    return this.adminRepository.findOne(admin_id);
  }
  async update(admin_id: number, application: AdminDto) {
    return this.adminRepository.update(admin_id, application);
  }
  async delete(admin_id: number) {
    return this.adminRepository.delete(admin_id);
  }
}
