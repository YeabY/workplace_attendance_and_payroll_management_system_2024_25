import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    create(createEmployeeDto: CreateEmployeeDto): {
        status: string;
        data: {
            fullname: string;
            age: number;
            phone: string;
            email: string;
            role: string;
            id: number;
        };
        message: string;
    };
    findAll(): {
        status: string;
        data: any[];
        message: string;
    };
    findOne(id: string): {
        status: string;
        data: any;
        message: string;
    };
    update(id: string, updateEmployeeDto: UpdateEmployeeDto): {
        status: string;
        data: any;
        message: string;
    };
    remove(id: string): {
        status: string;
        data: any[];
        message: string;
    };
}
