import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
  private items: string[] = [];

  getAll() {
    return this.items;
  }

  create(name: string) {
    this.items.push(name);
    return { message: 'Item creado', items: this.items };
  }
}
