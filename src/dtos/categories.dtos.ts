import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCategorieDto {
  @IsString()
  @IsNotEmpty()
  categorie: string;
  @IsNumber()
  @IsNotEmpty()
  status: number;
}

export class UpdateCategorieDto extends PartialType(CreateCategorieDto) {}
