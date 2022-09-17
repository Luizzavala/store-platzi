import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly userName: string;
  @IsString()
  @IsNotEmpty()
  readonly password: string;
  @IsNumber()
  @IsNotEmpty()
  readonly status: number;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
