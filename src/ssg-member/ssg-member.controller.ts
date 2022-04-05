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
import { SsgMemberService } from './ssg-member.service';
import { SsgMemberDto } from 'src/entities/ssg-member.dto';

@Controller('ssg-member')
export class ssgMemberController {
  constructor(private SsgMemberService: SsgMemberService) {}

  @ApiBody({ type: SsgMemberDto })
  @ApiOperation({
    summary: 'Add new SSG Member',
    operationId: 'AddSsg',
  })
  @ApiResponse({ status: 200, type: SsgMemberDto })
  @Post()
  async create(@Body() job: SsgMemberDto): Promise<SsgMemberDto> {
    return this.SsgMemberService.create(job);
  }

  @ApiOperation({ summary: 'Get all SSG Members', operationId: 'GetSsgs' })
  @ApiResponse({ status: 200, type: SsgMemberDto })
  @Get()
  async findAll(): Promise<SsgMemberDto[]> {
    return this.SsgMemberService.findAll();
  }

  @ApiOperation({ summary: 'Get SSG Members by id', operationId: 'GetSsg' })
  @ApiResponse({ status: 200, type: SsgMemberDto })
  @Get(':ssg_id')
  async findOne(@Param('ssg_id') id: number): Promise<SsgMemberDto> {
    return this.SsgMemberService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update SSG Member by id',
    operationId: 'UpdateSsg',
  })
  @ApiResponse({ status: 200, type: SsgMemberDto })
  @Put(':ssg_id')
  async update(@Param('ssg_id') id: number, @Body() job: SsgMemberDto) {
    return this.SsgMemberService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete SSG Member by id',
    operationId: 'DeleteSsg',
  })
  @ApiResponse({ status: 200, type: SsgMemberDto })
  @Delete(':ssg_id')
  async delete(@Param('ssg_id') id: number) {
    return this.SsgMemberService.deleteOne(id);
  }
}
