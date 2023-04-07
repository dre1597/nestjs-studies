import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import EventEmitter from 'events';

import { CreateListDto } from './dto/create-list.dto';
import { ListRepositoryInterface } from './repositories/list-repository.interface';
import { ListEntity } from './entities/list.entity';
import { ListCreatedEvent } from './events/list-created.event';

@Injectable()
export class ListsService {
  constructor(
    @Inject('ListPersistenceRepository')
    private listPersistenceRepository: ListRepositoryInterface,
    @Inject('EventEmitter')
    private eventEmitter: EventEmitter,
  ) {}

  async create(createListDto: CreateListDto): Promise<ListEntity> {
    const list = new ListEntity(createListDto.name);
    await this.listPersistenceRepository.create(list);
    this.eventEmitter.emit('list.created', new ListCreatedEvent(list));

    return list;
  }

  findAll(): Promise<ListEntity[]> {
    return this.listPersistenceRepository.findAll();
  }

  async findOne(id: number): Promise<ListEntity> {
    const list = await this.listPersistenceRepository.findById(id);
    if (!list) {
      throw new NotFoundException('List not found');
    }
    return list;
  }
}
