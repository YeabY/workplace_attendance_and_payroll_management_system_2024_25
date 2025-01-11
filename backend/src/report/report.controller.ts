import { Controller, Get, UseGuards } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportGuard } from './report.guard';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @UseGuards(ReportGuard)
  @Get('payroll')
  getPayrollTable() {
    const payrollData = this.reportService.getPayrollTable();
    return {
      status: 'success',
      data: payrollData,
      message: 'Payroll table retrieved successfully.',
    };
  }

  @UseGuards(ReportGuard)
  @Get('attendance')
  getAttendanceTable() {
    const attendanceData = this.reportService.getAttendanceTable();
    return {
      status: 'success',
      data: attendanceData,
      message: 'Attendance table retrieved successfully.',
    };
  }
}
