import { AttendService } from './attend.service';
import { CreateAttendanceDto } from './dto/create-attend.dto';
import { MarkAttendanceDto } from './dto/mark-attend.dto';
export declare class AttendController {
    private readonly attendanceService;
    constructor(attendanceService: AttendService);
    create(createAttendanceDto: CreateAttendanceDto): {
        status: string;
        data: {
            employeeId: number;
            fullname: string;
            position: string;
            date: string;
            shift: string;
            clock_in: string;
            clock_out: string;
            total_hours: string;
            status: string;
            id: number;
        };
        message: string;
    };
    markAttendance(markAttendanceDto: MarkAttendanceDto): {
        status: string;
        data: any;
        message: string;
    };
    findAll(): {
        status: string;
        data: any[];
        message: string;
    };
    findOne(employeeId: string): {
        status: string;
        data: any[];
        message: string;
    };
    update(id: string, updateAttendanceDto: Partial<CreateAttendanceDto>): {
        status: string;
        data: any;
        message: string;
    };
    remove(id: string): {
        status: string;
        data: any;
        message: string;
    };
}
