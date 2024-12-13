import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('items')
export class Item {
  @PrimaryGeneratedColumn()
  item_id: number;

  @Column({ length: 20, unique: true })
  item_number: string;

  @Column({ type: 'text' })
  description1: string;

  @Column({ type: 'text', nullable: true })
  description2: string;

  @Column({ length: 50 })
  part_number: string;

  @Column({ length: 50 })
  item_category: string;

  @Column()
  last_quantity_quoted: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  last_price_quoted: number;

  @Column({ length: 20 })
  unit_of_measurement: string;

  @Column({ type: 'simple-array' })
  item_images: string[];
}
