import { KafkaOptions, Transport } from '@nestjs/microservices';
import { config } from 'dotenv';
config()

export const kafkaConfig: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: process.env.APP_NAME,
      brokers: [`localhost:${process.env.KAFKA_PORT}`], 
    },
    consumer: {
      groupId: process.env.APP_CONSUMER, 
    },
  },
};
