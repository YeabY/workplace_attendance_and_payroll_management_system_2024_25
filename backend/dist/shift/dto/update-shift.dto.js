"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateShiftDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_shift_dto_1 = require("./create-shift.dto");
class UpdateShiftDto extends (0, mapped_types_1.PartialType)(create_shift_dto_1.CreateShiftDto) {
}
exports.UpdateShiftDto = UpdateShiftDto;
//# sourceMappingURL=update-shift.dto.js.map