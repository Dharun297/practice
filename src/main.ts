import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for all origins with various options
  app.enableCors({
    origin: true, // You can set specific origins like 'http://localhost:3000'
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable credentials (if needed)
    allowedHeaders: 'Content-Type, Accept, Authorization',
  });

  await app.listen(4000);
}
bootstrap();
