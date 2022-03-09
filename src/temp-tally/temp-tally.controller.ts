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
import { TempTallyService } from './temp-tally.service';
import { TempTallyDto } from 'src/entities/temp-tally.dto';

@Controller('temp-tally')
export class TempTallyController {
  constructor(private TempTallyService: TempTallyService) {}

  @ApiBody({ type: TempTallyDto })
  @ApiOperation({
    summary: 'Add new Tally ',
    operationId: 'AddTally',
  })
  @ApiResponse({ status: 200, type: TempTallyDto })
  @Post()
  async create(@Body() job: TempTallyDto): Promise<TempTallyDto> {
    return this.TempTallyService.create(job);
  }

  @ApiOperation({ summary: 'Get all Tally s', operationId: 'GetTally' })
  @ApiResponse({ status: 200, type: TempTallyDto })
  @Get()
  async findAll(): Promise<TempTallyDto[]> {
    return this.TempTallyService.findAll();
  }

  @ApiOperation({
    summary: 'Get Tally by id',
    operationId: 'GetTally',
  })
  @ApiResponse({ status: 200, type: TempTallyDto })
  @Get(':tempTally_id')
  async findOne(@Param('tempTally_id') id: number): Promise<TempTallyDto> {
    return this.TempTallyService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Tally by id',
    operationId: 'UpdateTally',
  })
  @ApiResponse({ status: 200, type: TempTallyDto })
  @Put(':tempTally_id')
  async update(@Param('tempTally_id') id: number, @Body() job: TempTallyDto) {
    return this.TempTallyService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Tally by id',
    operationId: 'DeleteTally',
  })
  @ApiResponse({ status: 200, type: TempTallyDto })
  @Delete(':tempTally_id')
  async delete(@Param('tempTally_id') id: number) {
    return this.TempTallyService.deleteOne(id);
  }
}
