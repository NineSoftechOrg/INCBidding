import { Controller, Get, Post, Put, Delete, Param, Body, Patch } from '@nestjs/common';
import { BidReceivedService } from './bid_received.service';
import { BidReceived } from './entities/bid_received.entity';

@Controller('bid-received')
export class BidReceivedController {
  constructor(private readonly bidReceivedService: BidReceivedService) {}

  @Get()
  findAll() {
    return this.bidReceivedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bidReceivedService.findOne(id);
  }

  @Post()
  create(@Body() bidReceived: BidReceived) {
    return this.bidReceivedService.create(bidReceived);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() bidReceived: Partial<BidReceived>) {
    return this.bidReceivedService.update(id, bidReceived);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.bidReceivedService.delete(id);
  }
}
