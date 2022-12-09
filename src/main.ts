import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
    app.enableCors();
  // console.log(process.env.port)
  await app.listen(process.env.port);
}
bootstrap();
