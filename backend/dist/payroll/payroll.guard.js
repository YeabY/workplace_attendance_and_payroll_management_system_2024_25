"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayrollGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let PayrollGuard = class PayrollGuard extends jwt_auth_guard_1.JwtAuthGuard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        const { method } = request;
        if (user && user.role === 'admin' && method === 'POST') {
            return true;
        }
        if (method === 'GET' && (user.role === 'admin' || user.role === 'employee')) {
            return true;
        }
        return false;
    }
};
exports.PayrollGuard = PayrollGuard;
exports.PayrollGuard = PayrollGuard = __decorate([
    (0, common_1.Injectable)()
], PayrollGuard);
//# sourceMappingURL=payroll.guard.js.map