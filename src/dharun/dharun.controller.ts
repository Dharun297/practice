import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentService } from './dharun.service';
import { studentsDTO } from './dharun.dto';
import { Student } from './interface/student.interface';
@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}
  @Get()
  getstudent(): string {
    return this.studentService.getStudents();
  }
  @Post()
  async createStudent(@Body()data:studentsDTO):Promise<Student>{
    return await this.studentService.createStudent(data);
  }
}