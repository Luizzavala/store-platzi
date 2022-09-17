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
import { Categorie } from '../entities/categorie.entity';
import {
  CreateCategorieDto,
  UpdateCategorieDto,
} from '../dtos/categories.dtos';
import { CategoriesService } from '../services/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}
  @Get()
  async getAll(): Promise<Categorie[]> {
    return this.categoriesService.findAll();
  }

  @Get(':id') // route or path
  async getById(@Param('id', ParseIntPipe) id: number): Promise<Categorie> {
    return this.categoriesService.findById(id);
  }

  @Post()
  async save(@Body() payload: CreateCategorieDto): Promise<Categorie> {
    return this.categoriesService.save(payload);
  }
  @Put()
  async update(
    @Query('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCategorieDto,
  ): Promise<Categorie> {
    return this.categoriesService.update(id, payload);
  }
}
