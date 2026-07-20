import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(data: any) {
    const hashedPassword = await argon2.hash(data.password);
    
    // Create User & Owner
    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        passwordHash: hashedPassword,
        owner: {
          create: {
            firstName: data.firstName,
            lastName: data.lastName,
          }
        }
      },
    });
    return { id: user.id, email: user.email };
  }

  async login(data: any) {
    const user = await this.prisma.user.findUnique({ where: { email: data.email } });
    if (!user) throw new UnauthorizedException('Credenciales inválidas');

    const isValid = await argon2.verify(user.passwordHash, data.password);
    if (!isValid) throw new UnauthorizedException('Credenciales inválidas');

    const payload = { sub: user.id, email: user.email, role: user.role };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
