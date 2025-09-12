import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString()
    @IsOptional()
    readonly brand?: string;
    
    @IsString()
    @IsOptional()   
    readonly model?: string;
   
    @Type(() => Number)
    @IsNumber()
    @IsOptional()
    readonly year?: number;
}