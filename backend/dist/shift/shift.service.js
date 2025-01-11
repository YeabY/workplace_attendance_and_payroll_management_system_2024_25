"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftService = void 0;
const common_1 = require("@nestjs/common");
let ShiftService = class ShiftService {
    constructor() {
        this.shifts = [];
        this.idCounter = 1;
    }
    createShift(createShiftDto) {
        const newShift = {
            id: this.idCounter++,
            ...createShiftDto,
        };
        this.shifts.push(newShift);
        return newShift;
    }
    getShift(shift) {
        return this.shifts.filter((s) => s.shiftType === shift);
    }
    getAllShifts() {
        return this.shifts;
    }
    updateShift(id, updateShiftDto) {
        const shift = this.shifts.find((s) => s.id === id);
        if (!shift)
            return null;
        Object.assign(shift, updateShiftDto);
        return shift;
    }
    deleteShift(id) {
        const index = this.shifts.findIndex((s) => s.id === id);
        if (index === -1)
            return null;
        return this.shifts.splice(index, 1)[0];
    }
};
exports.ShiftService = ShiftService;
exports.ShiftService = ShiftService = __decorate([
    (0, common_1.Injectable)()
], ShiftService);
//# sourceMappingURL=shift.service.js.map