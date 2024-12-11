import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Vendor } from '../../vendors/entities/vendor.entity';

@Entity('bid')
export class Bid {
  @PrimaryGeneratedColumn()
  bid_id: number;

  @Column({ length: 20, unique: true })
  bid_code: string;

  @Column({ length: 100 })
  bid_name: string;

  @Column({ type: 'date' })
  bid_start_date: Date;

  @Column({ type: 'date' })
  bid_end_date: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  lowest_bid_price: number;

  @Column({ type: 'simple-array' })
  vendors: string[]; // Vendor codes array

  @Column({ length: 20 })
  bid_status: string;

  @Column({ type: 'simple-array' })
  bids_received: string[]; // Array of bid_received IDs
}
