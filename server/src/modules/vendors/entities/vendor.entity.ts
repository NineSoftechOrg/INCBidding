import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('vendors')
export class Vendor {
  @PrimaryColumn({ length: 20 })
  vendor_code: string;

  @Column({ length: 100 })
  vendor_name: string;

  @Column({ length: 20 })
  contact1: string;

  @Column({ length: 20, nullable: true })
  contact2: string;

  @Column({ length: 100 })
  email_id: string;

  @Column({ length: 50 })
  vendor_type: string;

  @Column({ type: 'text' })
  address: string;

  @Column({ length: 50 })
  country: string;

  @Column({ length: 50 })
  state: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 10 })
  pincode: string;

  @Column({ type: 'simple-array' })
  kyc_documents: string[];

  @Column({ type: 'simple-array' })
  bids_placed: string[];
}
