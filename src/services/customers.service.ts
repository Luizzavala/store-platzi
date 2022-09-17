import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from '../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customers.dtos';

@Injectable()
export class CustomersService {
  private counterId = 1;
  private customers: Customer[] = [
    {
      id: 1,
      firstName: 'Luis',
      secondName: 'Miguel',
      lastName: 'Zavala',
      secondLastName: 'Felix',
      email: 'luismigeel@gmail.com',
    },
  ];
  //getAll
  findAll(): Customer[] {
    return this.customers;
  }
  //getById
  findById(id: number): Customer {
    const customer = this.customers.find((customer) => customer.id === id);
    if (!customer) {
      throw new NotFoundException(`customer ${id} not found`);
    }
    return customer;
  }
  //create product
  save(payload: CreateCustomerDto) {
    this.counterId = this.counterId + 1;
    const newData = {
      id: this.counterId,
      ...payload,
    };
    this.customers.push(newData);
    return newData;
  }
  //update product
  update(id: number, payload: UpdateCustomerDto) {
    const customer = this.customers.find((customer) => customer.id === id);
    if (!customer) {
      throw new NotFoundException(`customer ${id} not found`);
    }
    const index = this.customers.findIndex((item) => item.id === id);
    this.customers[index] = { ...customer, ...payload };
    return this.customers[index];
  }
}
