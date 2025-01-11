import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  private employees = [];

  create(createEmployeeDto: CreateEmployeeDto) {
    const id = this.employees.length + 1;
    const newEmployee = { id, ...createEmployeeDto };
    this.employees.push(newEmployee);
    return newEmployee;
  }
  
  findAll() {
    return this.employees;
  }

  findOne(id: number) {
    return this.employees.find(emp => emp.id === id);
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const employee = this.findOne(id);
    if (!employee) return null;
    Object.assign(employee, updateEmployeeDto);
    return employee;
  }

  remove(id: number) {
    const index = this.employees.findIndex(emp => emp.id === id);
    if (index === -1) return null;
    return this.employees.splice(index, 1);
  }
}
