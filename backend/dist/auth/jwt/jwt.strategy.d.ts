import { Strategy } from 'passport-jwt';
import { User } from '../entity/auth.entity';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: any): Promise<User>;
}
export {};
