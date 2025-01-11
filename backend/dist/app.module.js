"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const employee_module_1 = require("./employee/employee.module");
const auth_module_1 = require("./auth/auth.module");
const attend_module_1 = require("./attend/attend.module");
const shift_module_1 = require("./shift/shift.module");
const payroll_module_1 = require("./payroll/payroll.module");
const auth_entity_1 = require("./auth/entity/auth.entity");
const employee_entity_1 = require("./employee/entity/employee.entity");
const payroll_entity_1 = require("./payroll/entity/payroll.entity");
const attend_entity_1 = require("./attend/entity/attend.entity");
const shift_entity_1 = require("./shift/entity/shift.entity");
const report_controller_1 = require("./report/report.controller");
const report_service_1 = require("./report/report.service");
const report_module_1 = require("./report/report.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3307,
                username: 'root',
                password: 'pass1010',
                database: 'emp_table',
                entities: [auth_entity_1.User, employee_entity_1.Employee, payroll_entity_1.Payroll, attend_entity_1.Attendance, shift_entity_1.Shift],
                autoLoadEntities: true,
            }),
            employee_module_1.EmployeeModule, auth_module_1.AuthModule, attend_module_1.AttendModule, shift_module_1.ShiftModule, payroll_module_1.PayrollModule, report_module_1.ReportModule,
        ],
        controllers: [app_controller_1.AppController, report_controller_1.ReportController],
        providers: [app_service_1.AppService, report_service_1.ReportService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map