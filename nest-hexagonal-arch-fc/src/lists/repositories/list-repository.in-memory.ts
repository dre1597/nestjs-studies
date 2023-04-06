import { ListEntity } from '../entities/list.entity';
import { ListRepositoryInterface } from './list-repository.interface';

export class ListRepositoryInMemory implements ListRepositoryInterface {
  items: ListEntity[] = [];

  async create(list: ListEntity): Promise<ListEntity> {
    list.id = this.items.length + 1;
    this.items.push(list);

    return {
      id: list.id,
      name: list.name,
    };
  }

  async findAll(): Promise<ListEntity[]> {
    return this.items;
  }

  async findById(id: number): Promise<ListEntity> {
    const list = this.items.find((item) => item.id === id);

    if (!list) {
      throw new Error('List not found');
    }

    return list;
  }
}
