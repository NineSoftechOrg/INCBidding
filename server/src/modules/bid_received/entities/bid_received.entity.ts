import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Bid } from '../../bid/entities/bid.entity';

@Entity('bid_received')
export class BidReceived {
  @PrimaryColumn()
  received_bid_id: string;

  @Column()
  bid_id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  placed_bid_amount: string;

  @Column({ type: 'timestamp' })
  bid_placed_at: Date;

  @ManyToOne(() => Bid, (bid) => bid.bid_id)
  @JoinColumn({ name: 'bid_id' })
  bid: Bid;
}
