import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { VoteSsgDto } from './../entities/vote-ssg.dto';
import { VoteSsgService } from './vote-ssg.service';
import {
  Body,
  Controller,
  Param,
  Post,
  Get,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('vote-ssg')
export class VoteSsgController {
  constructor(private VoteSsgService: VoteSsgService) {}
  //add new SSG
  @ApiBody({ type: VoteSsgDto })
  @ApiOperation({
    summary: 'Add new SSG Candidate',
    operationId: 'AddVoteSsg',
  })
  @ApiResponse({ status: 200, type: VoteSsgDto })
  @Post()
  async create(@Body() job: VoteSsgDto): Promise<VoteSsgDto> {
    return this.VoteSsgService.create(job);
  }

  // select all from SSG Candidate
  @ApiOperation({
    summary: 'Get all SSG Candidate',
    operationId: 'GetVoteSsgs',
  })
  @ApiResponse({ status: 200, type: VoteSsgDto })
  @Get()
  async findAll(): Promise<VoteSsgDto[]> {
    return this.VoteSsgService.findAll();
  }

  //get voter_ssg_id from SSG Candidate
  @ApiOperation({
    summary: 'Get SSG Candidate by id',
    operationId: 'GetVoteSsg',
  })
  @ApiResponse({ status: 200, type: VoteSsgDto })
  @Get(':voter_ssg_id')
  async findOne(@Param('voter_ssg_id') id: number): Promise<VoteSsgDto> {
    return this.VoteSsgService.findOne(id);
  }

  //update voter_ssg_id from SSG Candidate
  @ApiOperation({
    summary: 'Update SSG Candidate by id',
    operationId: 'UpdateVoteSsg',
  })
  @ApiResponse({ status: 200, type: VoteSsgDto })
  @Put(':voter_ssg_id')
  async update(
    @Param('voter_ssg_id') id: number,
    @Body() job: VoteSsgDto,
  ) {
    return this.VoteSsgService.update(id, job);
  }

  //delete voter_ssg_id from SSG Candidate
  @ApiOperation({
    summary: 'Delete SSG Candidate by id',
    operationId: 'DeleteVoteSsg',
  })
  @ApiResponse({ status: 200, type: VoteSsgDto })
  @Delete(':voter_ssg_id')
  async delete(@Param('voter_ssg_id') id: number) {
    return this.VoteSsgService.deleteOne(id);
  }
}
