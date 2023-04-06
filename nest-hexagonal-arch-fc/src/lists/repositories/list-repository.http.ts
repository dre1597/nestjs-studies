import { HttpService } from '@nestjs/axios';

import { ListRepositoryInterface } from './list-repository.interface';
import { ListEntity } from '../entities/list.entity';
import { lastValueFrom } from 'rxjs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListRepositoryHttp implements ListRepositoryInterface {
  constructor(private readonly httpService: HttpService) {}

  async create(list: ListEntity): Promise<ListEntity> {
    await lastValueFrom(this.httpService.post('lists', { name: list.name }));
    return list;
  }

  async findAll(): Promise<ListEntity[]> {
    const { data } = await lastValueFrom(this.httpService.get('lists'));

    return data.map((l) => new ListEntity(l.name, l.id));
  }

  async findById(id: number): Promise<ListEntity> {
    const { data } = await lastValueFrom(this.httpService.get(`lists/${id}`));
    return new ListEntity(data.name, data.id);
  }
}
