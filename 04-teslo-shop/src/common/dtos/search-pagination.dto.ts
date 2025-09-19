import { IsOptional, IsInt, Min, IsString, IsNotEmpty } from 'class-validator';

export class SearchPaginationDto {
  @IsString()
  @IsNotEmpty()
  term: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  limit?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  offset?: number;
}