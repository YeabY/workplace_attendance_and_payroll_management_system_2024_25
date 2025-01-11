import { CreatePayrollDto } from './dto/create-payroll.dto';
export declare class PayrollService {
    private payrolls;
    private idCounter;
    generatePayroll(createPayrollDto: CreatePayrollDto): {
        employeeId: string;
        position: string;
        date: string;
        basicSalaryPerHour: number;
        totalHours: number;
        id: number;
    };
    getPayroll(employeeId: number): any[];
}
