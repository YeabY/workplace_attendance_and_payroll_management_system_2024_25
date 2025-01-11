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
exports.PayrollController = void 0;
const common_1 = require("@nestjs/common");
const payroll_service_1 = require("./payroll.service");
const create_payroll_dto_1 = require("./dto/create-payroll.dto");
const payroll_guard_1 = require("./payroll.guard");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let PayrollController = class PayrollController {
    constructor(payrollService) {
        this.payrollService = payrollService;
    }
    generatePayroll(createPayrollDto) {
        const result = this.payrollService.generatePayroll(createPayrollDto);
        return {
            status: 'success',
            data: result,
            message: 'Payroll generated successfully.',
        };
    }
    getPayroll(employeeId) {
        const result = this.payrollService.getPayroll(employeeId);
        if (!result.length) {
            throw new common_1.HttpException({
                status: 'error',
                data: null,
                message: `No payroll records found for employee ID ${employeeId}.`,
            }, common_1.HttpStatus.NOT_FOUND);
        }
        return {
            status: 'success',
            data: result,
            message: 'Payroll records retrieved successfully.',
        };
    }
};
exports.PayrollController = PayrollController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, payroll_guard_1.PayrollGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_payroll_dto_1.CreatePayrollDto]),
    __metadata("design:returntype", void 0)
], PayrollController.prototype, "generatePayroll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, payroll_guard_1.PayrollGuard),
    (0, common_1.Get)(':employeeId'),
    __param(0, (0, common_1.Param)('employeeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PayrollController.prototype, "getPayroll", null);
exports.PayrollController = PayrollController = __decorate([
    (0, common_1.Controller)('payroll'),
    __metadata("design:paramtypes", [payroll_service_1.PayrollService])
], PayrollController);
//# sourceMappingURL=payroll.controller.js.map