import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vendor } from './vendors/entities/vendor.entity'; 
import { VendorsModule } from './vendors/vendors.module';
import { ItemsModule } from './items/items.module';
import { Item } from './items/entities/item.entity'; 
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // Database host
      port: 5432, // Default PostgreSQL port
      username: 'postgres', // Your PostgreSQL username
      password: 'postgres', // Your PostgreSQL password
      database: 'bidding_db', // Database name
      entities: [Vendor,Item],
      synchronize: true, // Automatically sync the database schema (for development only)
    }),
    TypeOrmModule.forFeature([Vendor]), // Make sure Vendor is included here
    VendorsModule, ItemsModule,
  
  ],
})
export class AppModule {}
