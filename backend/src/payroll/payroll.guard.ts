import { Injectable,ExecutionContext,CanActivate } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';  

@Injectable()
export class PayrollGuard extends JwtAuthGuard {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;  
    const { method } = request;

    
    if (user && user.role === 'admin' && method === 'POST') {
      return true;  
    }

    if (method === 'GET' && (user.role === 'admin' || user.role === 'employee')) {
      return true;  
    }

    return false;  
}
}
