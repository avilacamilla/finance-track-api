import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Balance {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('float')
  amount!: number;

  @Column('date')
  date!: Date;
}
