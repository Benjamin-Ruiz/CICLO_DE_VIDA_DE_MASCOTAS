"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DogsService = class DogsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAllForOwner(userId) {
        const owner = await this.prisma.owner.findUnique({ where: { userId } });
        if (!owner)
            throw new common_1.NotFoundException('Owner not found');
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
    async create(userId, data) {
        const owner = await this.prisma.owner.findUnique({ where: { userId } });
        if (!owner)
            throw new common_1.NotFoundException('Owner not found');
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
};
exports.DogsService = DogsService;
exports.DogsService = DogsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DogsService);
//# sourceMappingURL=dogs.service.js.map