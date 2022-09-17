import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Customer } from '../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customers.dtos';
import { CustomersService } from '../services/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}
  @Get()
  async getAll(): Promise<Customer[]> {
    return this.customersService.findAll();
  }

  @Get(':id') // route or path
  async getById(@Param('id', ParseIntPipe) id: number): Promise<Customer> {
    return this.customersService.findById(id);
  }

  @Post()
  async save(@Body() payload: CreateCustomerDto): Promise<Customer> {
    return this.customersService.save(payload);
  }
  @Put()
  async update(
    @Query('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCustomerDto,
  ): Promise<Customer> {
    return this.customersService.update(id, payload);
  }
}
