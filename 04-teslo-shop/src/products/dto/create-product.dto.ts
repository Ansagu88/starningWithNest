import { IsString, IsNumber, IsOptional, IsPositive, MinLength, IsInt, IsArray, IsIn } from 'class-validator';

export class CreateProductDto {

    @IsString()
    @MinLength(2)
    title: string;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    price?: number;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    slug?: string;

    @IsInt()
    @IsPositive()
    @IsOptional()
    stock?: number;

    @IsString({ each: true })
    @IsArray()
    sizes: string[];

    @IsString()
    @IsIn(['male', 'female', 'unisex', 'kids'])
    gender: string;

}
