import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  brand: string;
  @IsNumber()
  @IsNotEmpty()
  status: number;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
