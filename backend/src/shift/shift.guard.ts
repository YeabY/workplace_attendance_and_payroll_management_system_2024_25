import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtPayload } from '../auth/interfaces/jwt-payload.interface'; 

@Injectable()
export class ShiftGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user: JwtPayload = request.user;  

    const requiredRole = this.reflector.get<string>('role', context.getHandler());

    if (!requiredRole) {
      return true;
    }

    return user.role === requiredRole;
  }
}
