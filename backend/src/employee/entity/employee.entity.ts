import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn()
  id: number; 

  @Column()
  fullname: string;

  @Column()
  age: number;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  role: string;
}
