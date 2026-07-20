import { DogsService } from './dogs.service';
export declare class DogsController {
    private readonly dogsService;
    constructor(dogsService: DogsService);
    findAll(req: any): Promise<({
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
    create(req: any, createDogDto: any): Promise<{
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
