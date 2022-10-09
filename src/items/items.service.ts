import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
  @Get()
  findAll() {
    return 'find all';
  }
}
