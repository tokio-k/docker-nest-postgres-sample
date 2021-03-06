import { Body, Controller, Get, Post } from '@nestjs/common';
import { Item } from 'src/entities/item.entity';
import { InsertResult } from 'typeorm';
import { CreateItemDTO } from './item.dto';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
  constructor(private readonly service: ItemService) {}

  // 全データ検索
  @Get()
  async getItemList(): Promise<Item[]> {
    return await this.service.findAll();
  }
  //データ追加
  @Post()
  async addItem(@Body() item: CreateItemDTO): Promise<InsertResult> {
    return await this.service.create(item);
  }
}
