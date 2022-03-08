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
import { UserDto } from '../entities/user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private usersService: UserService) {}

  @ApiBody({ type: UserDto })
  @ApiOperation({
    summary: 'Add new Users',
    operationId: 'AddUsers',
  })
  @ApiResponse({ status: 200, type: UserDto })
  @Post()
  async create(@Body() job: UserDto): Promise<UserDto> {
    return this.usersService.create(job);
  }

  @ApiOperation({ summary: 'Get all Users', operationId: 'GetUserss' })
  @ApiResponse({ status: 200, type: UserDto })
  @Get()
  async findAll(): Promise<UserDto[]> {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: 'Get Users by id', operationId: 'GetUsers' })
  @ApiResponse({ status: 200, type: UserDto })
  @Get(':account_id')
  async findOne(@Param('account_id') id: number): Promise<UserDto> {
    return this.usersService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Users by id',
    operationId: 'UpdateUsers',
  })
  @ApiResponse({ status: 200, type: UserDto })
  @Put(':account_id')
  async update(@Param('account_id') id: number, @Body() job: UserDto) {
    return this.usersService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Users by id',
    operationId: 'DeleteUsers',
  })
  @ApiResponse({ status: 200, type: UserDto })
  @Delete(':account_id')
  async delete(@Param('account_id') id: number) {
    return this.usersService.deleteOne(id);
  }
}
