import { Module } from '@nestjs/common';
import { AttendService } from './attend.service';
import { AttendController } from './attend.controller';
import { AttendanceGuard } from './attend.guard';
@Module({
  providers: [AttendService,AttendanceGuard],
  controllers: [AttendController]
})

export class AttendModule {
    
}
