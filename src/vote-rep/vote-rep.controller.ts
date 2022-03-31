import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { VoteRepDto } from 'src/entities/vote-rep.dto';
import { VoteRepService } from './vote-rep.service';
import {
  Body,
  Controller,
  Param,
  Post,
  Get,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('vote-rep')
export class VoteRepController {
  constructor(private VoteRepService: VoteRepService) {}
  //add new Representative
  @ApiBody({ type: VoteRepDto })
  @ApiOperation({
    summary: 'Add new Representative Candidate',
    operationId: 'AddVoteRep',
  })
  @ApiResponse({ status: 200, type: VoteRepDto })
  @Post()
  async create(@Body() job: VoteRepDto): Promise<VoteRepDto> {
    return this.VoteRepService.create(job);
  }

  // select all from rep Candidate
  @ApiOperation({
    summary: 'Get all Representative Candidate',
    operationId: 'GetVoteRep',
  })
  @ApiResponse({ status: 200, type: VoteRepDto })
  @Get()
  async findAll(): Promise<VoteRepDto[]> {
    return this.VoteRepService.findAll();
  }

  //get voter_rep_id from rep Candidate
  @ApiOperation({
    summary: 'Get Representative Candidate by id',
    operationId: 'GetVoteRep',
  })
  @ApiResponse({ status: 200, type: VoteRepDto })
  @Get(':voter_rep_id')
  async findOne(@Param('voter_rep_id') id: number): Promise<VoteRepDto> {
    return this.VoteRepService.findOne(id);
  }

  //update voter_rep_id from rep Candidate
  @ApiOperation({
    summary: 'Update Representative Candidate by id',
    operationId: 'UpdateVoteRep',
  })
  @ApiResponse({ status: 200, type: VoteRepDto })
  @Put(':voter_rep_id')
  async update(
    @Param('voter_rep_id') id: number,
    @Body() job: VoteRepDto,
  ) {
    return this.VoteRepService.update(id, job);
  }

  //delete voter_rep_id from Rep Candidate
  @ApiOperation({
    summary: 'Delete Representative Candidate by id',
    operationId: 'DeleteVoteRep',
  })
  @ApiResponse({ status: 200, type: VoteRepDto })
  @Delete(':voter_rep_id')
  async delete(@Param('voter_rep_id') id: number) {
    return this.VoteRepService.deleteOne(id);
  }
}
