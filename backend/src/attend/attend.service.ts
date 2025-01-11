import { Injectable, NotFoundException } from '@nestjs/common';
import { MarkAttendanceDto } from './dto/mark-attend.dto';
import { CreateAttendanceDto } from './dto/create-attend.dto';

@Injectable()
export class AttendService {
  private attendanceRecords = [];
  private idCounter = 1;

  // Create a new attendance record
  createAttendance(createAttendanceDto: CreateAttendanceDto) {
    const newRecord = {
      id: this.idCounter++,
      ...createAttendanceDto,
    };
    this.attendanceRecords.push(newRecord);
    return newRecord;
  }

  // Mark attendance for an employee
  markAttendance(markAttendanceDto: MarkAttendanceDto) {
    const now = new Date();
    const currentHour = now.getHours();
    let status = 'Absent';

    if (currentHour <= 9) {
      status = 'Present';
    } else if (currentHour > 9 && currentHour <= 11) {
      status = 'Late';
    }

    const existingRecord = this.attendanceRecords.find(
      (record) =>
        record.employeeId === markAttendanceDto.employeeId &&
        record.date === markAttendanceDto.date,
    );

    if (existingRecord) {
      existingRecord.clock_in = markAttendanceDto.clock_in;
      existingRecord.clock_out = markAttendanceDto.clock_out;
      existingRecord.total_hours = markAttendanceDto.total_hours;
      existingRecord.status = status;
      return existingRecord;
    } else {
      const newRecord = {
        id: this.idCounter++,
        ...markAttendanceDto,
        status,
      };
      this.attendanceRecords.push(newRecord);
      return newRecord;
    }
  }

  // Get all attendance records for a specific date (Admin only)
  getAllAttendanceForAdmin() {
    return this.attendanceRecords;
  }

  // Get attendance records for a specific employee
  getAttendance(employeeId: number) {
    return this.attendanceRecords.filter(
      (record) => record.employeeId === employeeId,
    );
  }

  // Update an existing attendance record
  updateAttendance(
    id: number,
    updateAttendanceDto: Partial<CreateAttendanceDto>,
  ) {
    const record = this.attendanceRecords.find((r) => r.id === id);
    if (!record) {
      throw new NotFoundException(`Attendance record with ID ${id} not found.`);
    }
    Object.assign(record, updateAttendanceDto);
    return record;
  }

  // Remove an attendance record
  removeAttendance(id: number) {
    const index = this.attendanceRecords.findIndex((record) => record.id === id);
    if (index === -1) {
      throw new NotFoundException(`Attendance record with ID ${id} not found.`);
    }
    const removedRecord = this.attendanceRecords.splice(index, 1)[0];
    return removedRecord;
  }
}
