import { Injectable, NotFoundException } from '@nestjs/common';
import { Brand } from './../entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brands.dtos';

@Injectable()
export class BrandsService {
  private counterId = 1;
  private brands: Brand[] = [
    {
      id: 1,
      brand: 'Mabe',
      status: 1,
    },
  ];
  //getAll
  findAll(): Brand[] {
    return this.brands;
  }
  //getById
  findById(id: number): Brand {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) {
      throw new NotFoundException(`Brand ${id} not found`);
    }
    return brand;
  }
  //create product
  save(payload: CreateBrandDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.brands.push(newProduct);
    return newProduct;
  }
  //update product
  update(id: number, payload: UpdateBrandDto) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) {
      throw new NotFoundException(`Brand ${id} not found`);
    }
    const index = this.brands.findIndex((item) => item.id === id);
    this.brands[index] = { ...brand, ...payload };
    return this.brands[index];
  }
}
