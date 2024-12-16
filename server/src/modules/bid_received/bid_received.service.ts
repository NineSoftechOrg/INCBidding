import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BidReceived } from './entities/bid_received.entity';

@Injectable()
export class BidReceivedService {
  constructor(
    @InjectRepository(BidReceived)
    private readonly bidReceivedRepository: Repository<BidReceived>,
  ) {}

  async findAll(): Promise<BidReceived[]> {
    return this.bidReceivedRepository.find({ relations: ['bid'] });
  }

  async findOne(id: string): Promise<BidReceived> {
    const bidReceived = await this.bidReceivedRepository.findOne({
      where: { received_bid_id: id },
      relations: ['bid'],
    });
    if (!bidReceived) throw new NotFoundException('Bid not found');
    return bidReceived;
  }

  async create(bidReceived: BidReceived): Promise<BidReceived> {
    return this.bidReceivedRepository.save(bidReceived);
  }

  async update(id: string, updateData: Partial<BidReceived>): Promise<BidReceived> {
    const bidReceived = await this.findOne(id);
    const updated = Object.assign(bidReceived, updateData);
    return this.bidReceivedRepository.save(updated);
  }

  async delete(id: string): Promise<void> {
    const result = await this.bidReceivedRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException('Bid not found');
  }
}
