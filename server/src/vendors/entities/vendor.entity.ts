import { Entity, PrimaryGeneratedColumn, Column, OneToMany  } from 'typeorm';
import { Item } from '../../items/entities/item.entity'; // Import Item entity
@Entity('vendors') // Table name in the database
export class Vendor {
  @PrimaryGeneratedColumn()
  vendor_id: number;

  @Column({ type: 'varchar', length: 20, unique: true })
  vendor_code: string;

  @Column({ type: 'varchar', length: 100 })
  vendor_name: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  phone_number: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  email_id: string;

  @Column({ type: 'text', nullable: true })
  address: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  vendor_type: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  country: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  state: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  city: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  pincode: string;

  @Column({ type: 'bytea', nullable: true })
  kyc_document: Buffer;
   // Add the reverse relationship with Item entity
   @OneToMany(() => Item, (item) => item.vendor)
   items: Item[];
}
