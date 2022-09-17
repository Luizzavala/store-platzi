import { IsNumber, IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateOrderDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;
  @IsString()
  @IsNotEmpty()
  paytype: string;
  @IsString()
  @IsNotEmpty()
  date: string;
  @IsNumber()
  @IsNotEmpty()
  status: number;
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
