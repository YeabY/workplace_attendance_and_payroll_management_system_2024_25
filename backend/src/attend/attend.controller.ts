import { Controller, Post, Body, Get, Patch, Param, Delete, UseGuards, SetMetadata, HttpException, HttpStatus } from '@nestjs/common';
import { AttendService } from './attend.service';
import { CreateAttendanceDto } from './dto/create-attend.dto';
import { MarkAttendanceDto } from './dto/mark-attend.dto';
import { AttendanceGuard } from './attend.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('attend')
export class AttendController {
  constructor(private readonly attendanceService: AttendService) {}

  @UseGuards(JwtAuthGuard, AttendanceGuard)
  @Post()
  @SetMetadata('role', 'admin')
  create(@Body() createAttendanceDto: CreateAttendanceDto) {
    const result = this.attendanceService.createAttendance(createAttendanceDto);
    return { status: 'success', data: result, message: 'Attendance record created successfully.' };
  }

  
  @UseGuards(JwtAuthGuard, AttendanceGuard)
  @Post('mark')
  @SetMetadata('role', 'employee')
  markAttendance(@Body() markAttendanceDto: MarkAttendanceDto) {
    const result = this.attendanceService.markAttendance(markAttendanceDto);
    if (!result) {
      throw new HttpException(
        { status: 'error', data: null, message: 'Failed to mark attendance.' },
        HttpStatus.BAD_REQUEST,
      );
    }
    return { status: 'success', data: result, message: 'Attendance marked successfully.' };
  }

  @UseGuards(JwtAuthGuard, AttendanceGuard)
  @Get()
  @SetMetadata('role', 'admin')
  findAll() {
    const result = this.attendanceService.getAllAttendanceForAdmin();
    return { status: 'success', data: result, message: 'All attendance records retrieved successfully.' };
  }

  
  @UseGuards(JwtAuthGuard, AttendanceGuard)
  @Get(':employeeId')
  findOne(@Param('employeeId') employeeId: string) {
    const result = this.attendanceService.getAttendance(+employeeId);
    if (!result || result.length === 0) {
      return { status: 'error', data: null, message: `No attendance records found for employee ID ${employeeId}.` };
    }
    return { status: 'success', data: result, message: 'Attendance records retrieved successfully.' };
  }

  
  @UseGuards(JwtAuthGuard, AttendanceGuard)
  @Patch(':id')
  @SetMetadata('role', 'admin')
  update(@Param('id') id: string, @Body() updateAttendanceDto: Partial<CreateAttendanceDto>) {
    const result = this.attendanceService.updateAttendance(+id, updateAttendanceDto);
    if (!result) {
      return { status: 'error', data: null, message: `Attendance record with ID ${id} not found.` };
    }
    return { status: 'success', data: result, message: 'Attendance record updated successfully.' };
  }

  @UseGuards(JwtAuthGuard, AttendanceGuard)
  @Delete(':id')
  @SetMetadata('role', 'admin')
  remove(@Param('id') id: string) {
    const result = this.attendanceService.removeAttendance(+id);
    if (!result) {
      return { status: 'error', data: null, message: `Attendance record with ID ${id} not found.` };
    }
    return { status: 'success', data: result, message: 'Attendance record deleted successfully.' };
  }
}
