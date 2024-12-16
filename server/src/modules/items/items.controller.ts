import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './entities/item.entity';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  // Create a new item
  @Post()
  async create(@Body() itemData: Partial<Item>): Promise<Item> {
    return this.itemsService.create(itemData);
  }

  // Retrieve all items
  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  // Retrieve an item by ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  // Update an item by ID
  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateData: Partial<Item>): Promise<Item> {
    return this.itemsService.update(id, updateData);
  }

  // Delete an item by ID
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.itemsService.remove(id);
  }
}
