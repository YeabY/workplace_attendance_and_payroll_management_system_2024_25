import { Controller, Post, Body, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/auth.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto) {
    const result = await this.authService.login(loginDto);
    return {
      status: result.status,

      data: {
        token: result.access_token || null,
        role : result.userRole || null,
      },
      message: result.message || 'Login completed successfully.',
    };
  }

  @Post('protected')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  protectedRoute() {
    return {
      status: 'success',
      data: { message: 'Access granted to protected route.' },
    };
  }
}
