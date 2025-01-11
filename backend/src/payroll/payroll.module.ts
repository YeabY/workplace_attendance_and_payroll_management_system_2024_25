import { Module } from '@nestjs/common';
import { PayrollController } from './payroll.controller';
import { PayrollService } from './payroll.service';

@Module({
    providers:[PayrollService],
    controllers:[PayrollController]
})
export class PayrollModule {}
