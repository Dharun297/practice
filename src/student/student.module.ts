import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { DharunSchema } from './student.schema';

@Module({
    imports: [MongooseModule.forFeature([{name: "dharun", schema:DharunSchema}])],
  controllers: [StudentController],
  providers: [StudentService]
})
export class StudentModule {}
