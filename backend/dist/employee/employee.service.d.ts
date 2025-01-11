import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeeService {
    private employees;
    create(createEmployeeDto: CreateEmployeeDto): {
        fullname: string;
        age: number;
        phone: string;
        email: string;
        role: string;
        id: number;
    };
    findAll(): any[];
    findOne(id: number): any;
    update(id: number, updateEmployeeDto: UpdateEmployeeDto): any;
    remove(id: number): any[];
}
