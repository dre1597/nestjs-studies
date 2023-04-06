import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { ListRepositoryInterface } from './list-repository.interface';
import { ListEntity } from '../entities/list.entity';
import { ListModel } from '../entities/list.model';

@Injectable()
export class ListRepositorySequelize implements ListRepositoryInterface {
  constructor(@InjectModel(ListModel) private listModel: typeof ListModel) {}

  async create(list: ListEntity): Promise<ListEntity> {
    const listModel = await this.listModel.create(list);

    return {
      id: listModel.id,
      name: listModel.name,
    };
  }

  async findAll(): Promise<ListEntity[]> {
    return (await this.listModel.findAll()).map(
      (list) => new ListEntity(list.name, list.id),
    );
  }

  async findById(id: number): Promise<ListEntity> {
    const listModel = await this.listModel.findByPk(id);

    if (!listModel) {
      throw new Error('List not found');
    }

    return new ListEntity(listModel.name, listModel.id);
  }
}
