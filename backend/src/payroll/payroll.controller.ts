import { Controller, Post, Body, Get, Param, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { PayrollService } from './payroll.service';
import { CreatePayrollDto } from './dto/create-payroll.dto';
import { PayrollGuard } from './payroll.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';  

@Controller('payroll')
export class PayrollController {
  constructor(private readonly payrollService: PayrollService) {}

  @UseGuards(JwtAuthGuard, PayrollGuard)  
  @Post()
  generatePayroll(@Body() createPayrollDto: CreatePayrollDto) {
    const result = this.payrollService.generatePayroll(createPayrollDto);
    return {
      status: 'success',
      data: result,
      message: 'Payroll generated successfully.',
    };
  }

  @UseGuards(JwtAuthGuard, PayrollGuard)  
  @Get(':employeeId')
  getPayroll(@Param('employeeId') employeeId: number) {
    const result = this.payrollService.getPayroll(employeeId);
    if (!result.length) {
      throw new HttpException(
        {
          status: 'error',
          data: null,
          message: `No payroll records found for employee ID ${employeeId}.`,
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return {
      status: 'success',
      data: result,
      message: 'Payroll records retrieved successfully.',
    };
  }
}
