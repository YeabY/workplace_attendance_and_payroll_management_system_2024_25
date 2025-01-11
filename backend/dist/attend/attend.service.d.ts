import { MarkAttendanceDto } from './dto/mark-attend.dto';
import { CreateAttendanceDto } from './dto/create-attend.dto';
export declare class AttendService {
    private attendanceRecords;
    private idCounter;
    createAttendance(createAttendanceDto: CreateAttendanceDto): {
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
    markAttendance(markAttendanceDto: MarkAttendanceDto): any;
    getAllAttendanceForAdmin(): any[];
    getAttendance(employeeId: number): any[];
    updateAttendance(id: number, updateAttendanceDto: Partial<CreateAttendanceDto>): any;
    removeAttendance(id: number): any;
}
