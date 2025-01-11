import { ReportService } from './report.service';
export declare class ReportController {
    private readonly reportService;
    constructor(reportService: ReportService);
    getPayrollTable(): {
        status: string;
        data: {
            employeeId: number;
            position: string;
            salary: number;
            date: string;
        }[];
        message: string;
    };
    getAttendanceTable(): {
        status: string;
        data: {
            employeeId: number;
            date: string;
            status: string;
        }[];
        message: string;
    };
}
