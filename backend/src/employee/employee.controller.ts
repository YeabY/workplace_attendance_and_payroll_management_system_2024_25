import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, SetMetadata } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeGuard } from './employee.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';  // JWT authentication guard

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  // Protect route with EmployeeGuard, and require the user to have an 'admin' role
  @UseGuards(JwtAuthGuard, EmployeeGuard)
  @Post()
  @SetMetadata('role', 'admin')  // Set 'admin' role for this route
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    const result = this.employeeService.create(createEmployeeDto);
    return { status: 'success', data: result, message: 'Employee created successfully.' };
  }

  // Get all employees, no specific role required
  @UseGuards(JwtAuthGuard, EmployeeGuard)
  @Get()
  findAll() {
    const result = this.employeeService.findAll();
    return { status: 'success', data: result, message: 'All employees retrieved successfully.' };
  }

  // Get a single employee by ID
  @UseGuards(JwtAuthGuard, EmployeeGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    const result = this.employeeService.findOne(+id);
    if (!result) {
      return { status: 'error', data: null, message: 'Employee not found.' };
    }
    return { status: 'success', data: result, message: 'Employee retrieved successfully.' };
  }

  // Update an employee by ID, only 'admin' can update
  @UseGuards(JwtAuthGuard, EmployeeGuard)
  @Patch(':id')
  @SetMetadata('role', 'admin')  // Set 'admin' role for this route
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    const result = this.employeeService.update(+id, updateEmployeeDto);
    if (!result) {
      return { status: 'error', data: null, message: 'Employee not found.' };
    }
    return { status: 'success', data: result, message: 'Employee updated successfully.' };
  }

  // Delete an employee by ID, only 'admin' can delete
  @UseGuards(JwtAuthGuard, EmployeeGuard)
  @Delete(':id')
  @SetMetadata('role', 'admin')  // Set 'admin' role for this route
  remove(@Param('id') id: string) {
    const result = this.employeeService.remove(+id);
    if (!result) {
      return { status: 'error', data: null, message: 'Employee not found.' };
    }
    return { status: 'success', data: result, message: 'Employee deleted successfully.' };
  }
}
