import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bid } from './entities/bid.entity';

@Injectable()
export class BidService {
  constructor(
    @InjectRepository(Bid)
    private readonly bidRepository: Repository<Bid>,
  ) {}

  async create(bid: Partial<Bid>): Promise<Bid> {
    const newBid = this.bidRepository.create(bid);
    return await this.bidRepository.save(newBid);
  }

  async findAll(): Promise<Bid[]> {
    return await this.bidRepository.find();
  }

  async findOne(id: number): Promise<Bid> {
    const bid = await this.bidRepository.findOne({ where: { bid_id: id } });
    if (!bid) throw new NotFoundException(`Bid #${id} not found`);
    return bid;
  }

  async update(id: number, bid: Partial<Bid>): Promise<Bid> {
    const existingBid = await this.findOne(id);
    Object.assign(existingBid, bid);
    return await this.bidRepository.save(existingBid);
  }

  async remove(id: number): Promise<void> {
    const result = await this.bidRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException(`Bid #${id} not found`);
  }
}
