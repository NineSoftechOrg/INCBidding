// src/items/entities/item.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Vendor } from '../../vendors/entities/vendor.entity';

@Entity('items')
export class Item {
  @PrimaryGeneratedColumn()
  item_id: number;

  @Column({ type: 'varchar', length: 20, unique: true })
  item_number: string;

  @Column({ type: 'text', nullable: true })
  description1: string;

  @Column({ type: 'text', nullable: true })
  description2: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  part_number: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  item_category: string;

  @Column({ type: 'int', nullable: true })
  last_quantity_quoted: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  last_price_quoted: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  unit_of_measurement: string;

  @ManyToOne(() => Vendor, (vendor) => vendor.items)
  @JoinColumn({ name: 'vendor_code', referencedColumnName: 'vendor_code' })
  vendor: Vendor;

  @Column({ type: 'bytea', nullable: true })
  item_image: Buffer;
}
