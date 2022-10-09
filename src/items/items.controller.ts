import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ItemStatus } from './item-status.enum';
import { Item } from './item.model';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemService.findAll();
  }

  @Get(':id') // items/id
  findById(@Param('id') id: string): Item {
    return this.itemService.findById(id);
  }

  @Post()
  create(
    @Body('id') id: string,
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description: string,
  ): Item {
    const item: Item = {
      id,
      name,
      price,
      description,
      status: ItemStatus.ON_SALE,
    };

    return this.itemService.create(item);
  }

  @Patch(':id')
  upDateStatus(@Param('id') id: string): Item {
    return this.itemService.updateStatus(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.itemService.delete(id);
  }
}
