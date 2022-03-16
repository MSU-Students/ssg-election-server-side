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

import { ElectionDto } from 'src/entities/election.dto';
import { ElectionService } from './election.service';
@Controller('election')
export class ElectionController {
  constructor(private electionService: ElectionService) {}

  //post new Election
  @ApiBody({ type: ElectionDto })
  @ApiOperation({
    summary: 'Add new Election',
    operationId: 'AddElection',
  })
  @ApiResponse({ status: 200, type: ElectionDto })
  @Post()
  async create(@Body() job: ElectionDto): Promise<ElectionDto> {
    return this.electionService.create(job);
  }
  //Select * from election
  @ApiOperation({ summary: 'Get all Election', operationId: 'GetElections' })
  @ApiResponse({ status: 200, type: ElectionDto })
  @Get()
  async findAll(): Promise<ElectionDto[]> {
    return this.electionService.findAll();
  }

  //Select election_id from Election
  @ApiOperation({ summary: 'Get Election by id', operationId: 'GetElection' })
  @ApiResponse({ status: 200, type: ElectionDto })
  @Get(':election_id')
  async findOne(@Param('election_id') id: number): Promise<ElectionDto> {
    return this.electionService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Election by id',
    operationId: 'UpdateElection',
  })
  @ApiResponse({ status: 200, type: ElectionDto })
  @Put(':election_id')
  async update(@Param('election_id') id: number, @Body() job: ElectionDto) {
    return this.electionService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Election by id',
    operationId: 'DeleteElection',
  })
  @ApiResponse({ status: 200, type: ElectionDto })
  @Delete(':election_id')
  async delete(@Param('election_id') id: number) {
    return this.electionService.deleteOne(id);
  }
}
