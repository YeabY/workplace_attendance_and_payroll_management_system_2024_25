import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { EmployeeGuard } from './employee.guard';

@Module({
  providers: [EmployeeService, EmployeeGuard],
  controllers: [EmployeeController]
})
export class EmployeeModule {}
