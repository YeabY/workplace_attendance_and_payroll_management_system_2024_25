import { Module } from '@nestjs/common';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';
import { ReportGuard } from './report.guard';

@Module({
  controllers: [ReportController],
  providers: [ReportService, ReportGuard],
})
export class ReportModule {}
