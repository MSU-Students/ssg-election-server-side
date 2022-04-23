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

import { StudentDto } from 'src/entities/student.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  //post new Student
  @ApiBody({ type: StudentDto })
  @ApiOperation({
    summary: 'Add new Student',
    operationId: 'AddStudent',
  })
  @ApiResponse({ status: 200, type: StudentDto })
  @Post()
  async create(@Body() job: StudentDto): Promise<StudentDto> {
    return this.studentService.create(job);
  }
  //Select * from student
  @ApiOperation({ summary: 'Get all Students', operationId: 'GetStudents' })
  @ApiResponse({ status: 200, type: StudentDto })
  @Get()
  async findAll(): Promise<StudentDto[]> {
    return this.studentService.findAll();
  }

  //Select student_id from Student
  @ApiOperation({ summary: 'Get Student by id', operationId: 'GetStudent' })
  @ApiResponse({ status: 200, type: StudentDto })
  @Get(':student_id')
  async findOne(@Param('student_id') id: number): Promise<StudentDto> {
    return this.studentService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Student by id',
    operationId: 'UpdateStudent',
  })
  @ApiResponse({ status: 200, type: StudentDto })
  @Put(':student_id')
  async update(@Param('student_id') id: number, @Body() job: StudentDto) {
    return this.studentService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Student by id',
    operationId: 'DeleteStudent',
  })
  @ApiResponse({ status: 200, type: StudentDto })
  @Delete(':student_id')
  async delete(@Param('student_id') id: number) {
    return this.studentService.delete(id);
  }
}
