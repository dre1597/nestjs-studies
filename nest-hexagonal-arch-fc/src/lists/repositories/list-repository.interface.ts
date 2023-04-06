import { ListEntity } from '../entities/list.entity';

export interface ListRepositoryInterface {
  create(list: ListEntity): Promise<ListEntity>;

  findAll(): Promise<ListEntity[]>;

  findById(id: number): Promise<ListEntity>;
}
