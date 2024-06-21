import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import {config} from 'dotenv'
import { kafkaConfig } from '../kafka.config'; 
config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: kafkaConfig.options, 
  });

  
  await app.listen(+process.env.APP_PORT || 3002);
}
bootstrap();
