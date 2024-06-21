import { IsString, IsInt, IsBoolean, IsOptional, Length, Min, Max } from 'class-validator';



export class CreateUserDto {
    @IsString()
    @Length(1, 50)
    firstName: string;

    @IsString()
    @Length(1, 50)
    lastName: string;

    @IsInt()
    @Min(18)
    @Max(80)
    age: number;

    @IsString()
    @Length(1, 10)
    gender: string;

    @IsBoolean()
    problems: boolean;
}