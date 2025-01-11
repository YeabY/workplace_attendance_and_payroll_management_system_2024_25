import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Payroll') // Replace 'employee' with the actual table name
export class Payroll {
  @PrimaryGeneratedColumn()
  id: number; // ID column

  @Column({ type: 'varchar', length: 255 })
  name: string; // Name column

  @Column({ type: 'varchar', length: 255 })
  position: string; // Position column

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  basicSalaryPerHour: number; // Basic Salary (per hour)

  @Column({ type: 'int' })
  totalHours: number; // Total Hours column

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  totalSalary: number; // Total Salary column (default to 0)
}
