import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { ListsService } from './lists.service';
import { CreateListDto } from './dto/create-list.dto';
import { ListEntity } from './entities/list.entity';

@Controller('lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @Post()
  create(@Body() createListDto: CreateListDto): Promise<ListEntity> {
    return this.listsService.create(createListDto);
  }

  @Get()
  findAll(): Promise<ListEntity[]> {
    return this.listsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ListEntity> {
    return this.listsService.findOne(+id);
  }
}
