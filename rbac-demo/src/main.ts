import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Main');
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, () => {
    logger.log(`Application is running on: http://localhost:3000`);
  });
}

bootstrap();
