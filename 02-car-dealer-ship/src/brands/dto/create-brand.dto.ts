import { MinLength, IsString } from "class-validator";


export class CreateBrandDto {

    @IsString() 
    @MinLength(2)
    name: string;
}
