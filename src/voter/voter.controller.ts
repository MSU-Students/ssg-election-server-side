import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
import { VoterDto } from 'src/entities/voter.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { VoterService } from './voter.service';


@Controller('voter')
export class VoterController {
    constructor(private voterService: VoterService) {}

  @ApiBody({ type: VoterDto })
  @ApiOperation({
    summary: 'Add new Voter',
    operationId: 'AddVoter',
  })
  @ApiResponse({ status: 200, type: VoterDto })
  @Post()
  async create(@Body() job: VoterDto): Promise<VoterDto> {
    return this.voterService.create(job);
  }

  @ApiOperation({ summary: 'Get all Voters', operationId: 'GetVoters' })
  @ApiResponse({ status: 200, type: VoterDto })
  @Get()
  async findAll(): Promise<VoterDto[]> {
    return this.voterService.findAll();
  }

  @ApiOperation({ summary: 'Get Voters by id', operationId: 'GetVoter' })
  @ApiResponse({ status: 200, type: VoterDto })
  @Get(':voter_id')
  async findOne(@Param('voter_id') id: number): Promise<VoterDto> {
    return this.voterService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Voter by id',
    operationId: 'UpdateVoter',
  })
  @ApiResponse({ status: 200, type: VoterDto })
  @Put(':voter_id')
  async update(@Param('voter_id') id: number, @Body() job: VoterDto) {
    return this.voterService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Voter by id',
    operationId: 'DeleteVoter',
  })
  @ApiResponse({ status: 200, type: VoterDto })
  @Delete(':voter_id')
  async delete(@Param('voter_id') id: number) {
    return this.voterService.deleteOne(id);
  }
}
