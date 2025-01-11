"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportService = void 0;
const common_1 = require("@nestjs/common");
let ReportService = class ReportService {
    constructor() {
        this.payrolls = [
            { employeeId: 1, position: 'Software Engineer', salary: 5000, date: '2025-01-01' },
            { employeeId: 2, position: 'HR Manager', salary: 4500, date: '2025-01-01' },
        ];
        this.attendance = [
            { employeeId: 1, date: '2025-01-01', status: 'Present' },
            { employeeId: 2, date: '2025-01-01', status: 'Absent' },
        ];
    }
    getPayrollTable() {
        return this.payrolls;
    }
    getAttendanceTable() {
        return this.attendance;
    }
};
exports.ReportService = ReportService;
exports.ReportService = ReportService = __decorate([
    (0, common_1.Injectable)()
], ReportService);
//# sourceMappingURL=report.service.js.map