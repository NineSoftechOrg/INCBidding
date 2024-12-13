import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column()
  user_name: string;

  @Column({ unique: true })
  user_email: string;

  @Column()
  user_company: string;

  @Column()
  user_role: string; // Can be 'super_admin', 'admin'.

  @Column({ default: false })
  is_deleted: boolean; 

  @Column()
  password: string; 
}
