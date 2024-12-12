import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryColumn()
  user_id: string;

  @Column()
  user_name: string;

  @Column()
  user_email: string;

  @Column()
  user_company: string;

  @Column()
  user_role: string;
}
