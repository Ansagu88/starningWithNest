import { Type } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

export class CreateCarDto {
    @IsString()
    readonly brand: string;
    
    @IsString()
    readonly model: string;
   
    @Type(() => Number)
    @IsNumber()
    readonly year: number;
}