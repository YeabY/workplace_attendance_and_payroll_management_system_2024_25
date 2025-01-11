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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportController = void 0;
const common_1 = require("@nestjs/common");
const report_service_1 = require("./report.service");
const report_guard_1 = require("./report.guard");
let ReportController = class ReportController {
    constructor(reportService) {
        this.reportService = reportService;
    }
    getPayrollTable() {
        const payrollData = this.reportService.getPayrollTable();
        return {
            status: 'success',
            data: payrollData,
            message: 'Payroll table retrieved successfully.',
        };
    }
    getAttendanceTable() {
        const attendanceData = this.reportService.getAttendanceTable();
        return {
            status: 'success',
            data: attendanceData,
            message: 'Attendance table retrieved successfully.',
        };
    }
};
exports.ReportController = ReportController;
__decorate([
    (0, common_1.UseGuards)(report_guard_1.ReportGuard),
    (0, common_1.Get)('payroll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "getPayrollTable", null);
__decorate([
    (0, common_1.UseGuards)(report_guard_1.ReportGuard),
    (0, common_1.Get)('attendance'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "getAttendanceTable", null);
exports.ReportController = ReportController = __decorate([
    (0, common_1.Controller)('report'),
    __metadata("design:paramtypes", [report_service_1.ReportService])
], ReportController);
//# sourceMappingURL=report.controller.js.map