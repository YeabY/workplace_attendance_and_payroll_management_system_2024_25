import { Module } from '@nestjs/common';
import { ShiftController } from './shift.controller';
import {ShiftService  } from './shift.service';
import { ShiftGuard } from './shift.guard'; 


@Module({
  controllers: [ShiftController],
  providers:[ShiftService,ShiftGuard]
})
export class ShiftModule {}
