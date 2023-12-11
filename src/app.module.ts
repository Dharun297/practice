import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';


const Connectionstring = "mongodb+srv://dharunninja:merchantform@form.buqzzqw.mongodb.net/Signup";
@Module({
  imports: [MongooseModule.forRoot(Connectionstring),StudentModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
