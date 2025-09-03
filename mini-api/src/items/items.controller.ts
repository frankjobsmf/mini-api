import { Controller, Get, Post, Body } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  getAll() {
    return this.itemsService.getAll();
  }

  @Post()
  create(@Body('name') name: string) {
    return this.itemsService.create(name);
  }
}
