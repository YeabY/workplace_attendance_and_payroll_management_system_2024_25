import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class MarkAttendanceDto {
  @IsNumber()
  @IsNotEmpty()
  employeeId: number;

  @IsString()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsNotEmpty()
  shift: string;

  @IsString()
  @IsNotEmpty()
  clock_in: string;

  @IsString()
  @IsNotEmpty()
  clock_out: string;

  @IsString()
  @IsNotEmpty()
  total_hours: string;

  @IsString()
  @IsNotEmpty()
  status: string;
}
