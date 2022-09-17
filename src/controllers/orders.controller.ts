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
import { OrdersService } from '../services/orders.service';
import { Order } from '../entities/order.entity';
import { CreateOrderDto, UpdateOrderDto } from '../dtos/orders.dtos';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @Get()
  async getAll(): Promise<Order[]> {
    return this.ordersService.findAll();
  }

  @Get(':id') // route or path
  async getById(@Param('id', ParseIntPipe) id: number): Promise<Order> {
    return this.ordersService.findById(id);
  }

  @Post()
  async save(@Body() payload: CreateOrderDto): Promise<Order> {
    return this.ordersService.save(payload);
  }
  @Put()
  async update(
    @Query('id', ParseIntPipe) id: number,
    @Body() payload: UpdateOrderDto,
  ): Promise<Order> {
    return this.ordersService.update(id, payload);
  }
}
