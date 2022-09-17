import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from '../entities/order.entity';
import { CreateOrderDto, UpdateOrderDto } from '../dtos/orders.dtos';

@Injectable()
export class OrdersService {
  private counterId = 1;
  private date = new Date().toISOString().split('T')[0];
  private orders: Order[] = [
    {
      id: 1,
      amount: 100,
      paytype: 'MX',
      date: this.date,
      status: 1,
    },
  ];
  //getAll
  findAll(): Order[] {
    return this.orders;
  }
  //getById
  findById(id: number): Order {
    const order = this.orders.find((order) => order.id === id);
    if (!order) {
      throw new NotFoundException(`Order ${id} not found`);
    }
    return order;
  }
  //create product
  save(payload: CreateOrderDto) {
    this.counterId = this.counterId + 1;
    const newData = {
      id: this.counterId,
      amount: payload.amount,
      paytype: payload.paytype,
      date: payload.date || this.date,
      status: payload.status || 1,
    };
    this.orders.push(newData);
    return newData;
  }
  //update product
  update(id: number, payload: UpdateOrderDto) {
    const order = this.orders.find((order) => order.id === id);
    if (!order) {
      throw new NotFoundException(`order ${id} not found`);
    }
    const index = this.orders.findIndex((item) => item.id === id);
    this.orders[index] = { ...order, ...payload };
    return this.orders[index];
  }
}
