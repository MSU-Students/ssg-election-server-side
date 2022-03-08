import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiBody,
    ApiOperation,
    ApiResponse,
  } from '@nestjs/swagger';

import { AdminDto } from 'src/entities/admin.dto';
import { AdminService } from './admin.service';


@Controller('admin')
export class AdminController {
    constructor(private adminService: AdminService) {}

    //post new Admin
  @ApiBody({ type: AdminDto })
  @ApiOperation({
    summary: 'Add new Admin',
    operationId: 'AddAdmin',
  })
  @ApiResponse({ status: 200, type: AdminDto })
  @Post()
  async create(@Body() job: AdminDto): Promise<AdminDto> {
    return this.adminService.create(job);
  }
  //Select * from admin
  @ApiOperation({ summary: 'Get all Admins', operationId: 'GetAdmins' })
  @ApiResponse({ status: 200, type: AdminDto })
  @Get()
  async findAll(): Promise<AdminDto[]> {
    return this.adminService.findAll();
  }

    //Select admin_id from Admin
  @ApiOperation({ summary: 'Get Admin by id', operationId: 'GetAdmin' })
  @ApiResponse({ status: 200, type: AdminDto })
  @Get(':admin_id')
  async findOne(@Param('admin_id') id: number): Promise<AdminDto> {
    return this.adminService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Admin by id',
    operationId: 'UpdateAdmin',
  })
  @ApiResponse({ status: 200, type: AdminDto })
  @Put(':admin_id')
  async update(@Param('admin_id') id: number, @Body() job: AdminDto) {
    return this.adminService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Admin by id',
    operationId: 'DeleteAdmin',
  })
  @ApiResponse({ status: 200, type: AdminDto })
  @Delete(':admin_id')
  async delete(@Param('admin_id') id: number) {
    return this.adminService.deleteOne(id);
  }
}
