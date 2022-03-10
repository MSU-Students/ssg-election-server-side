import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
  import { AccountTypeDto } from 'src/entities/account-type.dto';
  import { AccountTypeService } from './account-type.service';

@Controller('account-type')
export class AccountTypeController {
    constructor(private AccountTypeService: AccountTypeService) {}

  @ApiBody({ type: AccountTypeDto })
  @ApiOperation({
    summary: 'Add new Account Type',
    operationId: 'AddAccountType',
  })
  @ApiResponse({ status: 200, type: AccountTypeDto })
  @Post()
  async create(@Body() job: AccountTypeDto): Promise<AccountTypeDto> {
    return this.AccountTypeService.create(job);
  }

  @ApiOperation({ summary: 'Get all Account Type', operationId: 'GetAccountTypes' })
  @ApiResponse({ status: 200, type: AccountTypeService })
  @Get()
  async findAll(): Promise<AccountTypeDto[]> {
    return this.AccountTypeService.findAll();
  }

  @ApiOperation({ summary: 'Get Account Type by id', operationId: 'GetAccountType' })
  @ApiResponse({ status: 200, type: AccountTypeDto })
  @Get(':account_type_id')
  async findOne(@Param('account_type_id') id: number): Promise<AccountTypeDto> {
    return this.AccountTypeService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Account Type by id',
    operationId: 'UpdateAccountType',
  })
  @ApiResponse({ status: 200, type: AccountTypeDto })
  @Put(':account_type_id')
  async update(@Param('account_type_id') id: number, @Body() job: AccountTypeDto) {
    return this.AccountTypeService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Account Type by id',
    operationId: 'DeleteAccountType',
  })
  @ApiResponse({ status: 200, type: AccountTypeDto })
  @Delete(':account_type_id')
  async delete(@Param('account_type_id') id: number) {
    return this.AccountTypeService.deleteOne(id);
  }
}
