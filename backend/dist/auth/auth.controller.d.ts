import { AuthService } from './auth.service';
import { LoginDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        status: any;
        data: {
            token: any;
            role: any;
        };
        message: any;
    }>;
    protectedRoute(): {
        status: string;
        data: {
            message: string;
        };
    };
}
