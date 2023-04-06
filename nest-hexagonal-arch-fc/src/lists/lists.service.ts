import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { CreateListDto } from './dto/create-list.dto';
import { ListRepositoryInterface } from './repositories/list-repository.interface';
import { ListEntity } from './entities/list.entity';

@Injectable()
export class ListsService {
  constructor(
    @Inject('ListPersistenceRepository')
    private listPersistenceRepository: ListRepositoryInterface,
    @Inject('ListIntegrationRepository')
    private listIntegrationRepository: ListRepositoryInterface,
  ) {}

  async create(createListDto: CreateListDto): Promise<ListEntity> {
    const list = new ListEntity(createListDto.name);
    await this.listPersistenceRepository.create(list);
    await this.listIntegrationRepository.create(list);

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
