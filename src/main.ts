import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { checkDbForFileAndAddIfNeeded } from './utils/initDb';

async function bootstrap() {
  await checkDbForFileAndAddIfNeeded();
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();
