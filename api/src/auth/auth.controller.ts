import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() signUpDto: any) {
    return this.authService.register(signUpDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() signInDto: any) {
    return this.authService.login(signInDto);
  }
}
