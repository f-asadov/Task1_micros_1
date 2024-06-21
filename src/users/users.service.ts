import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientKafka } from '@nestjs/microservices';
import { CreateUserDto } from 'src/dto/create.user.dto';
import { UpdateUserDto } from 'src/dto/update.user.dto';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UsersService {
    private readonly userCreatedTopic = 'user_created';
    private readonly userUpdatedTopic = 'user_updated';

    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
        @Inject('KAFKA_SERVICE')
        private clientKafka: ClientKafka,
    ) { }


    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const userInfo = await this.usersRepository.save(createUserDto);
        this.clientKafka.emit(this.userCreatedTopic, { userInfo });
        return userInfo;
    }

    async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
        const user = await this.usersRepository.findOne({ where: { id } });
        if (!user) {
            console.log(`User with ID ${id} not found`)
            throw new NotFoundException(`User with ID ${id} not found`);
            
        }
        Object.assign(user, updateUserDto);
        const userInfo = await this.usersRepository.save(user);
        this.clientKafka.emit(this.userUpdatedTopic, { userInfo });
        return userInfo;
    }

    async getAllUsers(): Promise<User[]> {
        return await this.usersRepository.find();
    }
}
