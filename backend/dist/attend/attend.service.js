"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendService = void 0;
const common_1 = require("@nestjs/common");
let AttendService = class AttendService {
    constructor() {
        this.attendanceRecords = [];
        this.idCounter = 1;
    }
    createAttendance(createAttendanceDto) {
        const newRecord = {
            id: this.idCounter++,
            ...createAttendanceDto,
        };
        this.attendanceRecords.push(newRecord);
        return newRecord;
    }
    markAttendance(markAttendanceDto) {
        const now = new Date();
        const currentHour = now.getHours();
        let status = 'Absent';
        if (currentHour <= 9) {
            status = 'Present';
        }
        else if (currentHour > 9 && currentHour <= 11) {
            status = 'Late';
        }
        const existingRecord = this.attendanceRecords.find((record) => record.employeeId === markAttendanceDto.employeeId &&
            record.date === markAttendanceDto.date);
        if (existingRecord) {
            existingRecord.clock_in = markAttendanceDto.clock_in;
            existingRecord.clock_out = markAttendanceDto.clock_out;
            existingRecord.total_hours = markAttendanceDto.total_hours;
            existingRecord.status = status;
            return existingRecord;
        }
        else {
            const newRecord = {
                id: this.idCounter++,
                ...markAttendanceDto,
                status,
            };
            this.attendanceRecords.push(newRecord);
            return newRecord;
        }
    }
    getAllAttendanceForAdmin() {
        return this.attendanceRecords;
    }
    getAttendance(employeeId) {
        return this.attendanceRecords.filter((record) => record.employeeId === employeeId);
    }
    updateAttendance(id, updateAttendanceDto) {
        const record = this.attendanceRecords.find((r) => r.id === id);
        if (!record) {
            throw new common_1.NotFoundException(`Attendance record with ID ${id} not found.`);
        }
        Object.assign(record, updateAttendanceDto);
        return record;
    }
    removeAttendance(id) {
        const index = this.attendanceRecords.findIndex((record) => record.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException(`Attendance record with ID ${id} not found.`);
        }
        const removedRecord = this.attendanceRecords.splice(index, 1)[0];
        return removedRecord;
    }
};
exports.AttendService = AttendService;
exports.AttendService = AttendService = __decorate([
    (0, common_1.Injectable)()
], AttendService);
//# sourceMappingURL=attend.service.js.map