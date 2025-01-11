export declare class ReportService {
    private payrolls;
    private attendance;
    getPayrollTable(): {
        employeeId: number;
        position: string;
        salary: number;
        date: string;
    }[];
    getAttendanceTable(): {
        employeeId: number;
        date: string;
        status: string;
    }[];
}
