import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dtos';

@Injectable()
export class UsersService {
  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      userName: 'User 1',
      password: 'password',
      status: 1,
    },
  ];
  //getAll
  findAll(): User[] {
    return this.users;
  }
  //getById
  findById(id: number): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return user;
  }
  //create product
  save(payload: CreateUserDto) {
    this.counterId = this.counterId + 1;
    const newData = {
      id: this.counterId,
      ...payload,
    };
    this.users.push(newData);
    return newData;
  }
  //update product
  update(id: number, payload: UpdateUserDto) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`user ${id} not found`);
    }
    const index = this.users.findIndex((item) => item.id === id);
    this.users[index] = { ...user, ...payload };
    return this.users[index];
  }
}
