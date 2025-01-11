import { IsNotEmpty, IsString } from 'class-validator';

export class CreateShiftDto {
  @IsString()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsNotEmpty()
  shift: string;

  @IsString()
  @IsNotEmpty()
  employeeId: string;
}