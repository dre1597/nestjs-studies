import { ListCreatedEvent } from '../events/list-created.event';
import { Inject, Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

import { ListRepositoryInterface } from '../repositories/list-repository.interface';

@Injectable()
export class CreateListInCrmListener {
  constructor(
    @Inject('ListIntegrationRepository')
    private listIntegrationRepository: ListRepositoryInterface,
  ) {}

  @OnEvent('list.created')
  handle(event: ListCreatedEvent) {
    this.listIntegrationRepository.create(event.list);
  }
}
