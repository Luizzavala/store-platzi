import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Product description',
      price: 122,
      stock: 1,
      image: 'http://',
    },
  ];
  //getAll
  findAll(): Product[] {
    return this.products;
  }
  //getById
  findById(id: number): Product {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return product;
  }
  //create product
  save(payload: CreateProductDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  //update product
  update(id: number, payload: UpdateProductDto) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    const index = this.products.findIndex((item) => item.id === id);
    this.products[index] = { ...product, ...payload };
    return this.products[index];
  }
}
