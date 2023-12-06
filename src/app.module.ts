import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DharunModule } from './dharun/dharun.module';

@Module({
  imports: [DharunModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
