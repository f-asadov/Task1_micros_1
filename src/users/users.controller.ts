import { Controller, Post, Put, Get, Body, Param, ParseIntPipe } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from 'src/dto/create.user.dto';
import { UpdateUserDto } from 'src/dto/update.user.dto';
import { User } from 'src/entities/user.entity';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.createUser(createUserDto);
    }

    @Put(':id')
    async updateUser(
        @Param('id') id: string,
        @Body() updateUserDto: UpdateUserDto,
    ): Promise<User> {
        return this.usersService.updateUser(id, updateUserDto);
    }

    @Get()
    async getAllUsers(): Promise<User[]> {
        return this.usersService.getAllUsers();
    }
}
