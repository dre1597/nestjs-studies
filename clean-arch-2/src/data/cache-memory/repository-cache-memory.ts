import { Injectable, NotFoundException } from '@nestjs/common';
import { map, Observable, of } from 'rxjs';
import { Entity } from '../../core/base/entity';
import { Repository } from '../../core/base/repository';

@Injectable()
export class RepositoryCacheMemory<
  TEntity extends Entity,
> extends Repository<TEntity> {
  protected readonly items: TEntity[];

  constructor() {
    super();
    this.items = [];
  }

  create(data: TEntity): Observable<TEntity> {
    data.id = this.items.length > 0 ? this.items.slice(-1)[0].id + 1 : 1;

    const count = this.items.push(data);

    return of(this.items[count - 1]);
  }

  update(id: number, data: TEntity): Observable<TEntity> {
    const index = this.getIndexById(id);

    if (index === -1) {
      throw new NotFoundException('User not found');
    }

    this.items[index] = data;

    return of(this.items[index]);
  }

  patch(id: number, data: Partial<TEntity>): Observable<TEntity> {
    const index = this.getIndexById(id);

    if (index === -1) {
      throw new NotFoundException('User not found');
    }

    for (const key in data) {
      this.items[index][key] = data[key];
    }

    return of(this.items[index]);
  }

  getById(id: number): Observable<TEntity> {
    const items = this.items.find((item) => item.id === id);
    return of(items);
  }

  getAll(): Observable<TEntity[]> {
    return of(this.items);
  }

  getOne(filter: Partial<TEntity>): Observable<TEntity> {
    return this.getMany(filter).pipe(
      map((items) => (items.length > 0 ? items[0] : null)),
    );
  }

  getMany(filter: Partial<TEntity>): Observable<TEntity[]> {
    let filtered = this.items;

    for (const key in filter) {
      filtered = filtered.filter((item) => item[key] === filter[key]);
    }

    return of(filtered);
  }

  delete(id: number): Observable<void> {
    const index = this.getIndexById(id);

    if (index === -1) {
      throw new NotFoundException('User not found');
    }

    this.items.splice(index, 1);
    return of(null);
  }

  private getIndexById(id: number) {
    return this.items.findIndex((item) => item.id === id);
  }
}
