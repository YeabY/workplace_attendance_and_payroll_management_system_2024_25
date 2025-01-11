import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, SetMetadata } from '@nestjs/common';
import { ShiftService } from './shift.service';
import { CreateShiftDto } from './dto/create-shift.dto';
import { UpdateShiftDto } from './dto/update-shift.dto';
import { ShiftGuard } from './shift.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('shift')
export class ShiftController {
  constructor(private readonly shiftService: ShiftService) {}

  @UseGuards(JwtAuthGuard, ShiftGuard)
  @Post()
  @SetMetadata('role', 'admin')  
  create(@Body() createShiftDto: CreateShiftDto) {
    const result = this.shiftService.createShift(createShiftDto);
    return { status: 'success', data: result, message: 'Shift created successfully.' };
  }


  @UseGuards(JwtAuthGuard, ShiftGuard)
  @Get()
  @SetMetadata('role', 'admin')  
  findAll() {
    const result = this.shiftService.getAllShifts();
    return { status: 'success', data: result, message: 'All shifts retrieved successfully.' };
  }

  @UseGuards(JwtAuthGuard, ShiftGuard)
  @Get(':shift')
  findOne(@Param('shift') shift: string) {
    const result = this.shiftService.getShift(shift);
    if (!result || result.length === 0) {
      return { status: 'error', data: null, message: `No shifts found for shift type ${shift}.` };
    }
    return { status: 'success', data: result, message: 'Shift retrieved successfully.' };
  }

  @UseGuards(JwtAuthGuard, ShiftGuard)
  @Patch(':id')
  @SetMetadata('role', 'admin')  
  update(@Param('id') id: string, @Body() updateShiftDto: UpdateShiftDto) {
    const result = this.shiftService.updateShift(+id, updateShiftDto);
    if (!result) {
      return { status: 'error', data: null, message: `Shift with ID ${id} not found.` };
    }
    return { status: 'success', data: result, message: 'Shift updated successfully.' };
  }

  @UseGuards(JwtAuthGuard, ShiftGuard)
  @Delete(':id')
  @SetMetadata('role', 'admin') 
  remove(@Param('id') id: string) {
    const result = this.shiftService.deleteShift(+id);
    if (!result) {
      return { status: 'error', data: null, message: `Shift with ID ${id} not found.` };
    }
    return { status: 'success', data: result, message: 'Shift deleted successfully.' };
  }
}
