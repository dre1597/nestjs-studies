import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { INestMicroservice } from '@nestjs/common';

async function bootstrap() {
  const app: INestMicroservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.AMQPS],
        queue: 'main_queue',
        queueOptions: {
          durable: false,
        },
      },
    });

  await app.listen();
}
bootstrap();
