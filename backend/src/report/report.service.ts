import { Injectable } from '@nestjs/common';

@Injectable()
export class ReportService {

  private payrolls = [
    { employeeId: 1, position: 'Software Engineer', salary: 5000, date: '2025-01-01' },
    { employeeId: 2, position: 'HR Manager', salary: 4500, date: '2025-01-01' },
  ];

  private attendance = [
    { employeeId: 1, date: '2025-01-01', status: 'Present' },
    { employeeId: 2, date: '2025-01-01', status: 'Absent' },
  ];

  getPayrollTable() {
    return this.payrolls;
  }

  getAttendanceTable() {
    return this.attendance;
  }
}
