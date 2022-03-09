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
import { PrimeMinisterService } from './prime-minister.service';
import { PrimeMinisterDto } from 'src/entities/prime-minister.dto';

@Controller('prime-minister')
export class PrimeMinisterController {
  constructor(private PrimeMinisterService: PrimeMinisterService) {}

  @ApiBody({ type: PrimeMinisterDto })
  @ApiOperation({
    summary: 'Add new Prime Minister',
    operationId: 'AddPrime',
  })
  @ApiResponse({ status: 200, type: PrimeMinisterDto })
  @Post()
  async create(@Body() job: PrimeMinisterDto): Promise<PrimeMinisterDto> {
    return this.PrimeMinisterService.create(job);
  }

  @ApiOperation({ summary: 'Get all Prime Ministers', operationId: 'GetPrime' })
  @ApiResponse({ status: 200, type: PrimeMinisterDto })
  @Get()
  async findAll(): Promise<PrimeMinisterDto[]> {
    return this.PrimeMinisterService.findAll();
  }

  @ApiOperation({
    summary: 'Get Prime Minister by id',
    operationId: 'GetPrime',
  })
  @ApiResponse({ status: 200, type: PrimeMinisterDto })
  @Get(':primeMinister_id')
  async findOne(
    @Param('primeMinister_id') id: number,
  ): Promise<PrimeMinisterDto> {
    return this.PrimeMinisterService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Prime Minister by id',
    operationId: 'UpdatePrime',
  })
  @ApiResponse({ status: 200, type: PrimeMinisterDto })
  @Put(':primeMinister_id')
  async update(
    @Param('primeMinister_id') id: number,
    @Body() job: PrimeMinisterDto,
  ) {
    return this.PrimeMinisterService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Prime Minister by id',
    operationId: 'DeletePrime',
  })
  @ApiResponse({ status: 200, type: PrimeMinisterDto })
  @Delete(':primeMinister_id')
  async delete(@Param('primeMinister_id') id: number) {
    return this.PrimeMinisterService.deleteOne(id);
  }
}
