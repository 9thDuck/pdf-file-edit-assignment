import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { checkDbForFileAndAddIfNeeded } from './utils/initDb';
import { ValidationPipe } from '@nestjs/common';
import * as path from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  await checkDbForFileAndAddIfNeeded();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();

  app.useStaticAssets(path.join(__dirname, 'client-build'), {
    prefix: '/',
  });

  app.setViewEngine('html');

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(3001);
}
bootstrap();
