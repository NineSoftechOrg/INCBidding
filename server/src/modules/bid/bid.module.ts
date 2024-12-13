import { Module } from '@nestjs/common';
import { BidController } from './bid.controller';
import { BidService } from './bid.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bid } from './entities/bid.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bid])], // Registers the Bid entity
  controllers: [BidController],
  providers: [BidService],
  exports: [BidService],
})
export class BidModule {}
