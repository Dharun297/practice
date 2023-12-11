import { Body, Controller, Get, Post } from '@nestjs/common';
import { Merchant } from './student.interface';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private studentservice: StudentService)
    
{}
@Get()
getstudent():String
{
    return this.studentservice.getstudent();

}
@Post()
async createstudent(@Body()data:Merchant):Promise<Merchant>{
    return( await this.studentservice.createstudent(data));
}


}