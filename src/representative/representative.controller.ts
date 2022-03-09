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
import { RepresentativeDto } from 'src/entities/representative.dto';
import { RepresentativeService } from './representative.service';

@Controller('representative')
export class RepresentativeController {
  constructor(private RepresentativeService: RepresentativeService) {}
  //add new representative
  @ApiBody({ type: RepresentativeDto })
  @ApiOperation({
    summary: 'Add new Representative',
    operationId: 'AddRepresentative',
  })
  @ApiResponse({ status: 200, type: RepresentativeDto })
  @Post()
  async create(@Body() job: RepresentativeDto): Promise<RepresentativeDto> {
    return this.RepresentativeService.create(job);
  }

  // select all from representative
  @ApiOperation({
    summary: 'Get all Representatives',
    operationId: 'GetRepresentatives',
  })
  @ApiResponse({ status: 200, type: RepresentativeDto })
  @Get()
  async findAll(): Promise<RepresentativeDto[]> {
    return this.RepresentativeService.findAll();
  }

  //get representative_id from representative
  @ApiOperation({
    summary: 'Get Representatives by id',
    operationId: 'GetRepresentatives',
  })
  @ApiResponse({ status: 200, type: RepresentativeDto })
  @Get(':representative_id')
  async findOne(
    @Param('representative_id') id: number,
  ): Promise<RepresentativeDto> {
    return this.RepresentativeService.findOne(id);
  }

  //update representative_id from Representative
  @ApiOperation({
    summary: 'Update Representative by id',
    operationId: 'UpdateRepresentative',
  })
  @ApiResponse({ status: 200, type: RepresentativeDto })
  @Put(':representative_id')
  async update(
    @Param('representative_id') id: number,
    @Body() job: RepresentativeDto,
  ) {
    return this.RepresentativeService.update(id, job);
  }

  //delete representative_id from representative
  @ApiOperation({
    summary: 'Delete Representative by id',
    operationId: 'Representative',
  })
  @ApiResponse({ status: 200, type: RepresentativeDto })
  @Delete(':representative_id')
  async delete(@Param('representative_id') id: number) {
    return this.RepresentativeService.deleteOne(id);
  }
}
