import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginDto } from '../auth/dto/auth.dto';
import { User } from './entity/auth.entity';
import { JwtPayload } from './interfaces/jwt-payload.interface';


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { username } });
    if (user && user.password === pass) {
      return user;
    }
    return null;
  }

  async login(loginDto: LoginDto): Promise<any> {
    const user = await this.validateUser(loginDto.username, loginDto.password);
  
    if (!user) {
      return { status: 'error', message: 'Invalid credentials' };
    }
  
    const payload: JwtPayload = { username: user.username, sub: user.id, role: user.role };
    const token = this.jwtService.sign(payload);
  
    return {
      status: 'success',
      access_token: token,
      userRole: user.role, // Add the user's role here
      message: 'Login completed successfully.',
    };
  }
  
}
