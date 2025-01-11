"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendModule = void 0;
const common_1 = require("@nestjs/common");
const attend_service_1 = require("./attend.service");
const attend_controller_1 = require("./attend.controller");
const attend_guard_1 = require("./attend.guard");
let AttendModule = class AttendModule {
};
exports.AttendModule = AttendModule;
exports.AttendModule = AttendModule = __decorate([
    (0, common_1.Module)({
        providers: [attend_service_1.AttendService, attend_guard_1.AttendanceGuard],
        controllers: [attend_controller_1.AttendController]
    })
], AttendModule);
//# sourceMappingURL=attend.module.js.map