import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

// Import the database configuration
import databaseConfig from './config/database.config';

// Import feature modules
import { UsersModule } from './modules/users/users.module';
import { BidModule } from './modules/bid/bid.module';
import { BidReceivedModule } from './modules/bid_received/bid_received.module';
import { VendorsModule } from './modules/vendors/vendors.module';
import { ItemsModule } from './modules/items/items.module';

@Module({
  imports: [
    // Load environment variables globally and register custom database config
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule available globally
      load: [databaseConfig], // Register the custom configuration
    }),

    // TypeORM dynamic configuration using ConfigService
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.database'),
        autoLoadEntities: true, // Automatically load entities
        synchronize: true, // Set to false in production
      }),
      inject: [ConfigService],
    }),

    // Feature Modules
    UsersModule,
    BidModule,
    BidReceivedModule,
    VendorsModule,
    ItemsModule,
  ],
})
export class AppModule {}
