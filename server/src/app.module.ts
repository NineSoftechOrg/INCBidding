import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';

import { BidModule } from './modules/bid/bid.module';
import { BidReceivedModule } from './modules/bid_received/bid_received.module';
import { VendorsModule } from './modules/vendors/vendors.module';
import { ItemsModule } from './modules/items/items.module';


import { Bid } from './modules/bid/entities/bid.entity';
import { BidReceived } from './modules/bid_received/entities/bid_received.entity';
import { Item } from './modules/items/entities/item.entity';
import { User } from './modules/users/entities/user.entity';

import { Vendor} from './modules/vendors/entities/vendor.entity';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', 
      port: 5432,
      username: 'postgres', 
      password: '6775', 
      database: 'bidding_db', 
      entities:[Bid,BidReceived,Item,User,Vendor],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([]),
    UsersModule,
    BidModule,
    BidReceivedModule,
    VendorsModule,
    ItemsModule,
  

  
  ],
  
  
 
})
export class AppModule {}
