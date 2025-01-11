import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class CreateAttendanceDto {
  @IsNumber()
  @IsNotEmpty()
  employeeId: number;

  @IsString()
  @IsNotEmpty()
  fullname: string;

  @IsString()
  @IsNotEmpty()
  position: string;

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
