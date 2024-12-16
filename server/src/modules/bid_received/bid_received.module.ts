import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BidReceived } from './entities/bid_received.entity';
import { BidReceivedController } from './bid_received.controller';
import { BidReceivedService } from './bid_received.service';

@Module({
  imports: [TypeOrmModule.forFeature([BidReceived])],
  controllers: [BidReceivedController],
  providers: [BidReceivedService],
})
export class BidReceivedModule {}
