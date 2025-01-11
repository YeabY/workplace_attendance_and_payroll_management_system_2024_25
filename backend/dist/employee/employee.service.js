"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
let EmployeeService = class EmployeeService {
    constructor() {
        this.employees = [];
    }
    create(createEmployeeDto) {
        const id = this.employees.length + 1;
        const newEmployee = { id, ...createEmployeeDto };
        this.employees.push(newEmployee);
        return newEmployee;
    }
    findAll() {
        return this.employees;
    }
    findOne(id) {
        return this.employees.find(emp => emp.id === id);
    }
    update(id, updateEmployeeDto) {
        const employee = this.findOne(id);
        if (!employee)
            return null;
        Object.assign(employee, updateEmployeeDto);
        return employee;
    }
    remove(id) {
        const index = this.employees.findIndex(emp => emp.id === id);
        if (index === -1)
            return null;
        return this.employees.splice(index, 1);
    }
};
exports.EmployeeService = EmployeeService;
exports.EmployeeService = EmployeeService = __decorate([
    (0, common_1.Injectable)()
], EmployeeService);
//# sourceMappingURL=employee.service.js.map