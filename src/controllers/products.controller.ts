import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';

@Controller('products')
export class ProductsController {
  //inject service
  constructor(private productsService: ProductsService) {}

  @Get()
  async getAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id') // route or path
  async getById(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productsService.findById(id);
  }

  @Post()
  async save(@Body() payload: CreateProductDto): Promise<Product> {
    return this.productsService.save(payload);
  }
  @Put()
  async update(
    @Query('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ): Promise<Product> {
    return this.productsService.update(id, payload);
  }
}
