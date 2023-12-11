import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Merchant } from './student.interface';
@Injectable()
export class StudentService {
    constructor(@InjectModel('dharun') private readonly studentModel: Model<Merchant>) {}
    
getstudent():String{
return "Hi Maamey"
}
async createstudent(data:Merchant):Promise<Merchant>{
    const dharun=new this.studentModel(data);
return await dharun.save();
}
}
