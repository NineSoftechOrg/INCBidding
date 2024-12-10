// src/biddings/entities/bidding.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Vendor } from '../../vendors/entities/vendor.entity';

@Entity('biddings')
export class Bidding {
  @PrimaryGeneratedColumn()
  bidding_id: number;

  @Column({ type: 'varchar', length: 20, unique: true })
  bidding_code: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  bidding_name: string;

  @Column({ type: 'date', nullable: true })
  start_date: Date;

  @Column({ type: 'date', nullable: true })
  end_date: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  lowest_bidding_price: number;

  @ManyToOne(() => Vendor, (vendor) => vendor.items, { nullable: true }) // Adjusted relation with Vendor
  @JoinColumn({ name: 'vendor_code', referencedColumnName: 'vendor_code' })
  vendor: Vendor;

  @Column({ type: 'varchar', length: 20, nullable: true })
  status: string;
}
