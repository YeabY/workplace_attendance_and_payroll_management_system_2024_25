import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePayrollDto {
  @IsString()
  @IsNotEmpty()
  employeeId: string; // Employee ID

  @IsString()
  @IsNotEmpty()
  position: string; // Position

  @IsString()
  @IsNotEmpty()
  date: string; // Payroll Date

  @IsNumber()
  @IsNotEmpty()
  basicSalaryPerHour: number; // Basic Salary per Hour

  @IsNumber()
  @IsNotEmpty()
  totalHours: number; // Total Hours Worked
}
