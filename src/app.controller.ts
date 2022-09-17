import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get(':id') // route or path
  // // param, its request body
  // getHelloById(@Param('id') id: string): string {
  //   return this.appService.getById(id);
  // }
}
