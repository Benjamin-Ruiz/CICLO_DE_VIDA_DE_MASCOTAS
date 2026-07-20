import { PrismaService } from '../prisma/prisma.service';
export declare class DogsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAllForOwner(userId: string): Promise<({
        healthRecords: {
            id: string;
            scheduledDate: Date | null;
            dogId: string;
            vetId: string;
            type: import("@prisma/client").$Enums.RecordType;
            appliedDate: Date | null;
            vaccineBatch: string | null;
            observations: string | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        name: string;
        breed: string | null;
        sex: string | null;
        birthDate: Date | null;
        origin: string | null;
        baptismDate: Date | null;
        s3PhotoUrl: string | null;
        status: import("@prisma/client").$Enums.DogStatus;
    })[]>;
    create(userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        breed: string | null;
        sex: string | null;
        birthDate: Date | null;
        origin: string | null;
        baptismDate: Date | null;
        s3PhotoUrl: string | null;
        status: import("@prisma/client").$Enums.DogStatus;
    }>;
}
