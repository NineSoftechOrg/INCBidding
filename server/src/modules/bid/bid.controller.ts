import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BidService } from './bid.service';
import { Bid } from './entities/bid.entity';

@Controller('bids')
export class BidController {
  constructor(private readonly bidService: BidService) {}

  @Post()
  create(@Body() bid: Partial<Bid>) {
    return this.bidService.create(bid);
  }

  @Get()
  findAll() {
    return this.bidService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.bidService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() bid: Partial<Bid>) {
    return this.bidService.update(Number(id), bid);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.bidService.remove(Number(id));
  }
}
