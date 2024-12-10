// src/items/items.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { Vendor } from '../vendors/entities/vendor.entity'; // Vendor entity
import { VendorsModule } from '../vendors/vendors.module'; // Vendor module (imported if needed for relationships)

@Module({
  imports: [
    TypeOrmModule.forFeature([Item, Vendor]), // Import the entities
    VendorsModule, // If you need to use Vendor in services
  ],
  providers: [],
  controllers: [],
})
export class ItemsModule {}
