import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { BidModule } from './bid/bid.module';
import { BidReceivedModule } from './bid_received/bid_received.module';
import { VendorsModule } from './vendors/vendors.module';
import { ItemsModule } from './items/items.module';
import { LogsModule } from './logs/logs.module';
import { Bid } from './bid/entities/bid.entity';
import { BidReceived } from './bid_received/entities/bid_received.entity';
import { Item } from './items/entities/item.entity';
import { User } from './users/entities/user.entity';
import { Logs} from './logs/entities/log.entity';
import { Vendor} from './vendors/entities/vendor.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', 
      port: 5432,
      username: 'postgres', 
      password: 'postgres', 
      database: 'bidding_db', 
      entities:[Bid,BidReceived,Item,User,Logs,Vendor],
      synchronize: true, // Automatically sync the database schema
    }),
    TypeOrmModule.forFeature([]),
    UsersModule,
    BidModule,
    BidReceivedModule,
    VendorsModule,
    ItemsModule,
    LogsModule, 

  
  ],
})
export class AppModule {}
