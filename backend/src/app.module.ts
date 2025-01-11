import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { AuthModule } from './auth/auth.module';
import { AttendModule } from './attend/attend.module';
import { ShiftModule } from './shift/shift.module';
import { PayrollModule } from './payroll/payroll.module';
import { User } from './auth/entity/auth.entity';
import { Employee } from './employee/entity/employee.entity';
import { Payroll } from './payroll/entity/payroll.entity';
import { Attendance } from './attend/entity/attend.entity';
import { Shift } from './shift/entity/shift.entity';
import { ReportController } from './report/report.controller';
import { ReportService } from './report/report.service';
import { ReportModule } from './report/report.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'pass1010',
      database: 'emp_table',
      entities: [User, Employee, Payroll, Attendance, Shift],
      autoLoadEntities: true,
    }),
    EmployeeModule, AuthModule, AttendModule, ShiftModule, PayrollModule, ReportModule, 
  ],
  controllers: [AppController, ReportController],
  providers: [AppService, ReportService],
})
export class AppModule {}
