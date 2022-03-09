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

import { PositionsDto } from 'src/entities/positions.dto';
import { PositionsService } from './positions.service';
@Controller('positions')
export class PositionsController {
  constructor(private positionsService: PositionsService) {}

  //post new Positions
  @ApiBody({ type: PositionsDto })
  @ApiOperation({
    summary: 'Add new Positions',
    operationId: 'AddPositions',
  })
  @ApiResponse({ status: 200, type: PositionsDto })
  @Post()
  async create(@Body() job: PositionsDto): Promise<PositionsDto> {
    return this.positionsService.create(job);
  }
  //Select * from positions
  @ApiOperation({ summary: 'Get all Positions', operationId: 'GetPositions' })
  @ApiResponse({ status: 200, type: PositionsDto })
  @Get()
  async findAll(): Promise<PositionsDto[]> {
    return this.positionsService.findAll();
  }

  //Select positions_id from Positions
  @ApiOperation({ summary: 'Get Positions by id', operationId: 'GetPositions' })
  @ApiResponse({ status: 200, type: PositionsDto })
  @Get(':positions_id')
  async findOne(@Param('positions_id') id: number): Promise<PositionsDto> {
    return this.positionsService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Positions by id',
    operationId: 'UpdatePositions',
  })
  @ApiResponse({ status: 200, type: PositionsDto })
  @Put(':positions_id')
  async update(@Param('positions_id') id: number, @Body() job: PositionsDto) {
    return this.positionsService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Positions by id',
    operationId: 'DeletePositions',
  })
  @ApiResponse({ status: 200, type: PositionsDto })
  @Delete(':positions_id')
  async delete(@Param('positions_id') id: number) {
    return this.positionsService.deleteOne(id);
  }
}
