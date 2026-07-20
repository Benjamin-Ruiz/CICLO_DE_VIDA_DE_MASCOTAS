import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DogsService {
  constructor(private prisma: PrismaService) {}

  async findAllForOwner(userId: string) {
    const owner = await this.prisma.owner.findUnique({ where: { userId } });
    if (!owner) throw new NotFoundException('Owner not found');

    return this.prisma.dog.findMany({
      where: {
        owners: {
          some: { ownerId: owner.id }
        }
      },
      include: {
        healthRecords: { orderBy: { scheduledDate: 'desc' }, take: 1 }
      }
    });
  }

  async create(userId: string, data: any) {
    const owner = await this.prisma.owner.findUnique({ where: { userId } });
    if (!owner) throw new NotFoundException('Owner not found');

    return this.prisma.dog.create({
      data: {
        name: data.name,
        breed: data.breed,
        birthDate: data.birthDate ? new Date(data.birthDate) : null,
        owners: {
          create: {
            ownerId: owner.id,
            permissionsLevel: 'FULL'
          }
        }
      }
    });
  }
}
