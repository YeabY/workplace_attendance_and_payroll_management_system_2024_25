import { Injectable } from '@nestjs/common';
import{ CreatePayrollDto} from './dto/create-payroll.dto';

@Injectable()
export class PayrollService {
  private payrolls = [];
  private idCounter = 1;
   generatePayroll(createPayrollDto: CreatePayrollDto) {
    const newPayroll = {
      id: this.idCounter++,
      ...createPayrollDto,
    };
    this.payrolls.push(newPayroll);
    return newPayroll;
  }

  getPayroll(employeeId: number) {
    return this.payrolls.filter(p => p.employeeId === employeeId);
  }
}
