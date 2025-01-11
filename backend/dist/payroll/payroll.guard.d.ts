import { ExecutionContext } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
export declare class PayrollGuard extends JwtAuthGuard {
    canActivate(context: ExecutionContext): boolean;
}
