import { Injectable, NotFoundException } from '@nestjs/common';
import { Categorie } from './../entities/categorie.entity';
import {
  CreateCategorieDto,
  UpdateCategorieDto,
} from '../dtos/categories.dtos';

@Injectable()
export class CategoriesService {
  private counterId = 1;
  private categories: Categorie[] = [
    {
      id: 1,
      categorie: 'Electronic',
      status: 1,
    },
  ];
  //getAll
  findAll(): Categorie[] {
    return this.categories;
  }
  //getById
  findById(id: number): Categorie {
    const categorie = this.categories.find((categorie) => categorie.id === id);
    if (!categorie) {
      throw new NotFoundException(`categorie ${id} not found`);
    }
    return categorie;
  }
  //create categorie
  save(payload: CreateCategorieDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.categories.push(newProduct);
    return newProduct;
  }
  //update categorie
  update(id: number, payload: UpdateCategorieDto) {
    const categorie = this.categories.find((categorie) => categorie.id === id);
    if (!categorie) {
      throw new NotFoundException(`categorie ${id} not found`);
    }
    const index = this.categories.findIndex((item) => item.id === id);
    this.categories[index] = { ...categorie, ...payload };
    return this.categories[index];
  }
}
