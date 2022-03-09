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

import { CandidateDto } from 'src/entities/candidate.dto';
import { CandidateService } from './candidate.service';
@Controller('candidate')
export class CandidateController {
  constructor(private candidateService: CandidateService) {}

  //post new Candidate
  @ApiBody({ type: CandidateDto })
  @ApiOperation({
    summary: 'Add new Candidate',
    operationId: 'AddCandidate',
  })
  @ApiResponse({ status: 200, type: CandidateDto })
  @Post()
  async create(@Body() job: CandidateDto): Promise<CandidateDto> {
    return this.candidateService.create(job);
  }
  //Select * from candidate
  @ApiOperation({ summary: 'Get all Candidate', operationId: 'GetCandidate' })
  @ApiResponse({ status: 200, type: CandidateDto })
  @Get()
  async findAll(): Promise<CandidateDto[]> {
    return this.candidateService.findAll();
  }

  //Select candidate_id from Candidate
  @ApiOperation({ summary: 'Get Candidate by id', operationId: 'GetCandidate' })
  @ApiResponse({ status: 200, type: CandidateDto })
  @Get(':candidate_id')
  async findOne(@Param('candidate_id') id: number): Promise<CandidateDto> {
    return this.candidateService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Candidate by id',
    operationId: 'UpdateCandidate',
  })
  @ApiResponse({ status: 200, type: CandidateDto })
  @Put(':candidate_id')
  async update(@Param('candidate_id') id: number, @Body() job: CandidateDto) {
    return this.candidateService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Candidate by id',
    operationId: 'DeleteCandidate',
  })
  @ApiResponse({ status: 200, type: CandidateDto })
  @Delete(':candidate_id')
  async delete(@Param('candidate_id') id: number) {
    return this.candidateService.deleteOne(id);
  }
}
