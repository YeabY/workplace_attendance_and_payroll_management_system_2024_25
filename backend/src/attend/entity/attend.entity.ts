import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('attendances')
export class Attendance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  employeeId: number;

  @Column()
  fullname: string;

  @Column()
  position: string;
 
    @Column({ type: 'date' })
    date: Date; // Storing just the date part
  
    @Column({ type: 'time', nullable: true })
    worked_hours: string; // Storing time in HH:MM:SS format
  
    @Column({ nullable: true })
    status: string;
  
    @Column({ type: 'time', nullable: true })
    clock_in: string; // Storing clock-in time
  
    @Column({ type: 'time', nullable: true })
    clock_out: string; // Storing clock-out time
  
    @Column({ type: 'time', nullable: true })
    total_hours: string; // Total hours in HH:MM:SS format
  }
  

