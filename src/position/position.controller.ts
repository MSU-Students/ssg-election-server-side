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
import { PositionDto } from 'src/entities/position.dto';
import { PositionService } from './position.service';

@Controller('position')
export class PositionController {
  constructor(private PositionService: PositionService) {}
  //add new position
  @ApiBody({ type: PositionDto })
  @ApiOperation({
    summary: 'Add new Position',
    operationId: 'AddPosition',
  })
  @ApiResponse({ status: 200, type: PositionDto })
  @Post()
  async create(@Body() job: PositionDto): Promise<PositionDto> {
    return this.PositionService.create(job);
  }

  // select all from position
  @ApiOperation({ summary: 'Get all Positions', operationId: 'GetPositions' })
  @ApiResponse({ status: 200, type: PositionDto })
  @Get()
  async findAll(): Promise<PositionDto[]> {
    return this.PositionService.findAll();
  }

  //get position_id from position
  @ApiOperation({ summary: 'Get Positions by id', operationId: 'GetPosition' })
  @ApiResponse({ status: 200, type: PositionDto })
  @Get(':position_id')
  async findOne(@Param('position_id') id: number): Promise<PositionDto> {
    return this.PositionService.findOne(id);
  }

  //update position_id from Position
  @ApiOperation({
    summary: 'Update Position by id',
    operationId: 'UpdatePosition',
  })
  @ApiResponse({ status: 200, type: PositionDto })
  @Put(':position_id')
  async update(@Param('position_id') id: number, @Body() job: PositionDto) {
    return this.PositionService.update(id, job);
  }

  //delete position_id from position
  @ApiOperation({
    summary: 'Delete Position by id',
    operationId: 'DeletePosition',
  })
  @ApiResponse({ status: 200, type: PositionDto })
  @Delete(':position_id')
  async delete(@Param('position_id') id: number) {
    return this.PositionService.delete(id);
  }
}
