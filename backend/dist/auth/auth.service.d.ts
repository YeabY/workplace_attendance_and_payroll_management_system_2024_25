import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { LoginDto } from '../auth/dto/auth.dto';
import { User } from './entity/auth.entity';
export declare class AuthService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<User | null>;
    login(loginDto: LoginDto): Promise<any>;
}
