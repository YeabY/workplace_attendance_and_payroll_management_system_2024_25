import { ShiftService } from './shift.service';
import { CreateShiftDto } from './dto/create-shift.dto';
import { UpdateShiftDto } from './dto/update-shift.dto';
export declare class ShiftController {
    private readonly shiftService;
    constructor(shiftService: ShiftService);
    create(createShiftDto: CreateShiftDto): {
        status: string;
        data: {
            date: string;
            shift: string;
            employeeId: string;
            id: number;
        };
        message: string;
    };
    findAll(): {
        status: string;
        data: any[];
        message: string;
    };
    findOne(shift: string): {
        status: string;
        data: any[];
        message: string;
    };
    update(id: string, updateShiftDto: UpdateShiftDto): {
        status: string;
        data: any;
        message: string;
    };
    remove(id: string): {
        status: string;
        data: any;
        message: string;
    };
}
