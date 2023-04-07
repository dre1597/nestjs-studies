import { ListEntity } from '../entities/list.entity';

export class ListCreatedEvent {
  constructor(public list: ListEntity) {}
}
