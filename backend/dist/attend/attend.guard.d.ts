import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
export declare class AttendanceGuard implements CanActivate {
    private readonly reflector;
    constructor(reflector: Reflector);
    canActivate(context: ExecutionContext): boolean;
}
