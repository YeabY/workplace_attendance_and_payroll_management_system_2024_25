import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('shifts')
export class Shift {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  employeeId: number;
  
  @Column()
  fullname: string;

  @Column()
  shiftType: string;

  @Column()
  shiftstart: string;

  @Column()
  shiftend: string;
  
}
