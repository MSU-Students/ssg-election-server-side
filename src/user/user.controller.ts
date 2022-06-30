import { JwtAuthGuard } from './jwt-auth.guard';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserDto } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(
    private usersService: UserService,
    private authService: AuthService,
  ) {}

  @ApiBody({ type: UserDto })
  @ApiOperation({
    summary: 'Add new Users',
    operationId: 'AddUsers',
  })
  @ApiResponse({ status: 200, type: UserDto })
  @Post('/create')
  create(@Body() user: UserDto) {
    return this.authService.register(user);
  }

  @ApiOperation({ summary: 'Get all Users', operationId: 'GetUserss' })
  @ApiResponse({ status: 200, type: [UserDto] })
  @Get()
  async findAll(): Promise<UserDto[]> {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: 'Get Users by id', operationId: 'GetUsers' })
  @ApiResponse({ status: 200, type: UserDto })
  @Get(':account_id')
  async findOne(@Param('account_id') id: number): Promise<UserDto> {
    const user = await this.usersService.findOne(id);
    return {
      ...user,
      password: undefined,
    };
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: 'Update Users by id',
    operationId: 'UpdateUsers',
  })
  @ApiResponse({ status: 200, type: UserDto })
  @Put(':account_id')
  async update(@Param('account_id') id: number, @Body() user: UserDto) {
    return this.usersService.update(id, user);
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
