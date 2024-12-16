import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  // Create a new item
  async create(itemData: Partial<Item>): Promise<Item> {
    const newItem = this.itemRepository.create(itemData);
    return await this.itemRepository.save(newItem);
  }

  // Retrieve all items
  async findAll(): Promise<Item[]> {
    return await this.itemRepository.find();
  }

  // Retrieve an item by ID
  async findOne(id: number): Promise<Item> {
    const item = await this.itemRepository.findOneBy({ item_id: id });
    if (!item) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
    return item;
  }

  // Update an item by ID
  async update(id: number, updateData: Partial<Item>): Promise<Item> {
    const item = await this.findOne(id); // Ensures the item exists
    const updatedItem = Object.assign(item, updateData);
    return await this.itemRepository.save(updatedItem);
  }

  // Delete an item by ID
  async remove(id: number): Promise<void> {
    const result = await this.itemRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
  }
}
