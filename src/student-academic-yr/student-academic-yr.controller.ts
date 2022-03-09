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
import { StudentAcademicYrService } from './student-academic-yr.service';
import { StudentAcademicYrDto } from 'src/entities/student-academic-yr.dto';

@Controller('student-academic-yr')
export class StudentAcademicYrController {
  constructor(private StudentAcademicYrService: StudentAcademicYrService) {}

  @ApiBody({ type: StudentAcademicYrDto })
  @ApiOperation({
    summary: 'Add new Student Academic Year',
    operationId: 'AddStudentAcademicYear',
  })
  @ApiResponse({ status: 200, type: StudentAcademicYrDto })
  @Post()
  async create(
    @Body() job: StudentAcademicYrDto,
  ): Promise<StudentAcademicYrDto> {
    return this.StudentAcademicYrService.create(job);
  }

  @ApiOperation({
    summary: 'Get all Student Academic Years',
    operationId: 'GetStudentAcademicYear',
  })
  @ApiResponse({ status: 200, type: StudentAcademicYrDto })
  @Get()
  async findAll(): Promise<StudentAcademicYrDto[]> {
    return this.StudentAcademicYrService.findAll();
  }

  @ApiOperation({
    summary: 'Get Student Academic Year by id',
    operationId: 'GetStudentAcademicYear',
  })
  @ApiResponse({ status: 200, type: StudentAcademicYrDto })
  @Get(':studentAcademicYr_id')
  async findOne(
    @Param('studentAcademicYr_id') id: number,
  ): Promise<StudentAcademicYrDto> {
    return this.StudentAcademicYrService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Student Academic Year by id',
    operationId: 'UpdateStudentAcademicYear',
  })
  @ApiResponse({ status: 200, type: StudentAcademicYrDto })
  @Put(':studentAcademicYr_id')
  async update(
    @Param('studentAcademicYr_id') id: number,
    @Body() job: StudentAcademicYrDto,
  ) {
    return this.StudentAcademicYrService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Student Academic Year by id',
    operationId: 'DeleteStudentAcademicYear',
  })
  @ApiResponse({ status: 200, type: StudentAcademicYrDto })
  @Delete(':studentAcademicYr_id')
  async delete(@Param('studentAcademicYr_id') id: number) {
    return this.StudentAcademicYrService.deleteOne(id);
  }
}
