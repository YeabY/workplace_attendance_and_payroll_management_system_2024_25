import { CreateShiftDto } from './dto/create-shift.dto';
import { UpdateShiftDto } from './dto/update-shift.dto';
export declare class ShiftService {
    private shifts;
    private idCounter;
    createShift(createShiftDto: CreateShiftDto): {
        date: string;
        shift: string;
        employeeId: string;
        id: number;
    };
    getShift(shift: string): any[];
    getAllShifts(): any[];
    updateShift(id: number, updateShiftDto: UpdateShiftDto): any;
    deleteShift(id: number): any;
}
