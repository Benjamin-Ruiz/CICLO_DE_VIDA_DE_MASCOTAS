import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Get()
  findAll(@Request() req: any) {
    return this.dogsService.findAllForOwner(req.user.sub);
  }

  @Post()
  create(@Request() req: any, @Body() createDogDto: any) {
    return this.dogsService.create(req.user.sub, createDogDto);
  }
}
