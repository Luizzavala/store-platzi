import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;
  @IsString()
  readonly secondName: string;
  @IsString()
  @IsNotEmpty()
  readonly lastName: string;
  @IsString()
  readonly secondLastName: string;
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
