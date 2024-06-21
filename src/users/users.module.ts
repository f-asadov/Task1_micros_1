import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { kafkaConfig } from 'kafka.config';
import { User } from 'src/entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports:[TypeOrmModule.forFeature([User]), ClientsModule.register([
    {
      name: 'KAFKA_SERVICE',
      ...kafkaConfig,
    },
  ])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
