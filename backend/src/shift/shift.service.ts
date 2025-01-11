import { Injectable } from '@nestjs/common';
import { CreateShiftDto } from './dto/create-shift.dto';
import { UpdateShiftDto } from './dto/update-shift.dto';

@Injectable()
export class ShiftService {
  private shifts = [];
  private idCounter = 1;

  createShift(createShiftDto: CreateShiftDto) {
    const newShift = {
      id: this.idCounter++,
      ...createShiftDto,
    };
    this.shifts.push(newShift);
    return newShift;
  }

 
  getShift(shift: string) {
    return this.shifts.filter((s) => s.shiftType === shift);
  }
  getAllShifts() {
    return this.shifts;
  }


  updateShift(id: number, updateShiftDto: UpdateShiftDto) {
    const shift = this.shifts.find((s) => s.id === id);
    if (!shift) return null;

    Object.assign(shift, updateShiftDto);
    return shift;
  }

  deleteShift(id: number) {
    const index = this.shifts.findIndex((s) => s.id === id);
    if (index === -1) return null;

    return this.shifts.splice(index, 1)[0];
  }
}
