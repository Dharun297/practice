import { Body, Controller, Get, Post,Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  create(@Body('name') name: string, @Body('age') age: number): string {
    return 'hi' + name + 'age is ' + age;}
}

