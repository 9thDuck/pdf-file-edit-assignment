import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { checkDbForFileAndAddIfNeeded } from './utils/initDb';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  await checkDbForFileAndAddIfNeeded();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(3001);
}
bootstrap();
