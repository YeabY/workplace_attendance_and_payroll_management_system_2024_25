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
exports.ShiftController = void 0;
const common_1 = require("@nestjs/common");
const shift_service_1 = require("./shift.service");
const create_shift_dto_1 = require("./dto/create-shift.dto");
const update_shift_dto_1 = require("./dto/update-shift.dto");
const shift_guard_1 = require("./shift.guard");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let ShiftController = class ShiftController {
    constructor(shiftService) {
        this.shiftService = shiftService;
    }
    create(createShiftDto) {
        const result = this.shiftService.createShift(createShiftDto);
        return { status: 'success', data: result, message: 'Shift created successfully.' };
    }
    findAll() {
        const result = this.shiftService.getAllShifts();
        return { status: 'success', data: result, message: 'All shifts retrieved successfully.' };
    }
    findOne(shift) {
        const result = this.shiftService.getShift(shift);
        if (!result || result.length === 0) {
            return { status: 'error', data: null, message: `No shifts found for shift type ${shift}.` };
        }
        return { status: 'success', data: result, message: 'Shift retrieved successfully.' };
    }
    update(id, updateShiftDto) {
        const result = this.shiftService.updateShift(+id, updateShiftDto);
        if (!result) {
            return { status: 'error', data: null, message: `Shift with ID ${id} not found.` };
        }
        return { status: 'success', data: result, message: 'Shift updated successfully.' };
    }
    remove(id) {
        const result = this.shiftService.deleteShift(+id);
        if (!result) {
            return { status: 'error', data: null, message: `Shift with ID ${id} not found.` };
        }
        return { status: 'success', data: result, message: 'Shift deleted successfully.' };
    }
};
exports.ShiftController = ShiftController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, shift_guard_1.ShiftGuard),
    (0, common_1.Post)(),
    (0, common_1.SetMetadata)('role', 'admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_shift_dto_1.CreateShiftDto]),
    __metadata("design:returntype", void 0)
], ShiftController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, shift_guard_1.ShiftGuard),
    (0, common_1.Get)(),
    (0, common_1.SetMetadata)('role', 'admin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShiftController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, shift_guard_1.ShiftGuard),
    (0, common_1.Get)(':shift'),
    __param(0, (0, common_1.Param)('shift')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShiftController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, shift_guard_1.ShiftGuard),
    (0, common_1.Patch)(':id'),
    (0, common_1.SetMetadata)('role', 'admin'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_shift_dto_1.UpdateShiftDto]),
    __metadata("design:returntype", void 0)
], ShiftController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, shift_guard_1.ShiftGuard),
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('role', 'admin'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShiftController.prototype, "remove", null);
exports.ShiftController = ShiftController = __decorate([
    (0, common_1.Controller)('shift'),
    __metadata("design:paramtypes", [shift_service_1.ShiftService])
], ShiftController);
//# sourceMappingURL=shift.controller.js.map