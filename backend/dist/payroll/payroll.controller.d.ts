import { PayrollService } from './payroll.service';
import { CreatePayrollDto } from './dto/create-payroll.dto';
export declare class PayrollController {
    private readonly payrollService;
    constructor(payrollService: PayrollService);
    generatePayroll(createPayrollDto: CreatePayrollDto): {
        status: string;
        data: {
            employeeId: string;
            position: string;
            date: string;
            basicSalaryPerHour: number;
            totalHours: number;
            id: number;
        };
        message: string;
    };
    getPayroll(employeeId: number): {
        status: string;
        data: any[];
        message: string;
    };
}
