import { IsString, IsInt, IsBoolean, IsOptional, Min, Max, Length } from 'class-validator';



export class UpdateUserDto {
    @IsOptional()
    @IsString()
    @Length(1, 50)
    firstName?: string;

    @IsOptional()
    @IsString()
    @Length(1, 50)
    lastName?: string;

    @IsOptional()
    @IsInt()
    @Min(18)
    @Max(80)
    age?: number;

    @IsOptional()
    @IsString()
    @Length(1, 10)
    gender?: string;

    @IsOptional()
    @IsBoolean()
    problems?: boolean;
}