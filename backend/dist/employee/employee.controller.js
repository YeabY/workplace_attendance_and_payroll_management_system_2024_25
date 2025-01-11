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
exports.EmployeeController = void 0;
const common_1 = require("@nestjs/common");
const employee_service_1 = require("./employee.service");
const create_employee_dto_1 = require("./dto/create-employee.dto");
const update_employee_dto_1 = require("./dto/update-employee.dto");
const employee_guard_1 = require("./employee.guard");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let EmployeeController = class EmployeeController {
    constructor(employeeService) {
        this.employeeService = employeeService;
    }
    create(createEmployeeDto) {
        const result = this.employeeService.create(createEmployeeDto);
        return { status: 'success', data: result, message: 'Employee created successfully.' };
    }
    findAll() {
        const result = this.employeeService.findAll();
        return { status: 'success', data: result, message: 'All employees retrieved successfully.' };
    }
    findOne(id) {
        const result = this.employeeService.findOne(+id);
        if (!result) {
            return { status: 'error', data: null, message: 'Employee not found.' };
        }
        return { status: 'success', data: result, message: 'Employee retrieved successfully.' };
    }
    update(id, updateEmployeeDto) {
        const result = this.employeeService.update(+id, updateEmployeeDto);
        if (!result) {
            return { status: 'error', data: null, message: 'Employee not found.' };
        }
        return { status: 'success', data: result, message: 'Employee updated successfully.' };
    }
    remove(id) {
        const result = this.employeeService.remove(+id);
        if (!result) {
            return { status: 'error', data: null, message: 'Employee not found.' };
        }
        return { status: 'success', data: result, message: 'Employee deleted successfully.' };
    }
};
exports.EmployeeController = EmployeeController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, employee_guard_1.EmployeeGuard),
    (0, common_1.Post)(),
    (0, common_1.SetMetadata)('role', 'admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_employee_dto_1.CreateEmployeeDto]),
    __metadata("design:returntype", void 0)
], EmployeeController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, employee_guard_1.EmployeeGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmployeeController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, employee_guard_1.EmployeeGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeeController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, employee_guard_1.EmployeeGuard),
    (0, common_1.Patch)(':id'),
    (0, common_1.SetMetadata)('role', 'admin'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_employee_dto_1.UpdateEmployeeDto]),
    __metadata("design:returntype", void 0)
], EmployeeController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, employee_guard_1.EmployeeGuard),
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('role', 'admin'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeeController.prototype, "remove", null);
exports.EmployeeController = EmployeeController = __decorate([
    (0, common_1.Controller)('employee'),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], EmployeeController);
//# sourceMappingURL=employee.controller.js.map