"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendController = void 0;
const common_1 = require("@nestjs/common");
const attend_service_1 = require("./attend.service");
const create_attend_dto_1 = require("./dto/create-attend.dto");
const mark_attend_dto_1 = require("./dto/mark-attend.dto");
const attend_guard_1 = require("./attend.guard");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let AttendController = class AttendController {
    constructor(attendanceService) {
        this.attendanceService = attendanceService;
    }
    create(createAttendanceDto) {
        const result = this.attendanceService.createAttendance(createAttendanceDto);
        return { status: 'success', data: result, message: 'Attendance record created successfully.' };
    }
    markAttendance(markAttendanceDto) {
        const result = this.attendanceService.markAttendance(markAttendanceDto);
        if (!result) {
            throw new common_1.HttpException({ status: 'error', data: null, message: 'Failed to mark attendance.' }, common_1.HttpStatus.BAD_REQUEST);
        }
        return { status: 'success', data: result, message: 'Attendance marked successfully.' };
    }
    findAll() {
        const result = this.attendanceService.getAllAttendanceForAdmin();
        return { status: 'success', data: result, message: 'All attendance records retrieved successfully.' };
    }
    findOne(employeeId) {
        const result = this.attendanceService.getAttendance(+employeeId);
        if (!result || result.length === 0) {
            return { status: 'error', data: null, message: `No attendance records found for employee ID ${employeeId}.` };
        }
        return { status: 'success', data: result, message: 'Attendance records retrieved successfully.' };
    }
    update(id, updateAttendanceDto) {
        const result = this.attendanceService.updateAttendance(+id, updateAttendanceDto);
        if (!result) {
            return { status: 'error', data: null, message: `Attendance record with ID ${id} not found.` };
        }
        return { status: 'success', data: result, message: 'Attendance record updated successfully.' };
    }
    remove(id) {
        const result = this.attendanceService.removeAttendance(+id);
        if (!result) {
            return { status: 'error', data: null, message: `Attendance record with ID ${id} not found.` };
        }
        return { status: 'success', data: result, message: 'Attendance record deleted successfully.' };
    }
};
exports.AttendController = AttendController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, attend_guard_1.AttendanceGuard),
    (0, common_1.Post)(),
    (0, common_1.SetMetadata)('role', 'admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_attend_dto_1.CreateAttendanceDto]),
    __metadata("design:returntype", void 0)
], AttendController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, attend_guard_1.AttendanceGuard),
    (0, common_1.Post)('mark'),
    (0, common_1.SetMetadata)('role', 'employee'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mark_attend_dto_1.MarkAttendanceDto]),
    __metadata("design:returntype", void 0)
], AttendController.prototype, "markAttendance", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, attend_guard_1.AttendanceGuard),
    (0, common_1.Get)(),
    (0, common_1.SetMetadata)('role', 'admin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AttendController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, attend_guard_1.AttendanceGuard),
    (0, common_1.Get)(':employeeId'),
    __param(0, (0, common_1.Param)('employeeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AttendController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, attend_guard_1.AttendanceGuard),
    (0, common_1.Patch)(':id'),
    (0, common_1.SetMetadata)('role', 'admin'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AttendController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, attend_guard_1.AttendanceGuard),
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('role', 'admin'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AttendController.prototype, "remove", null);
exports.AttendController = AttendController = __decorate([
    (0, common_1.Controller)('attend'),
    __metadata("design:paramtypes", [attend_service_1.AttendService])
], AttendController);
//# sourceMappingURL=attend.controller.js.map