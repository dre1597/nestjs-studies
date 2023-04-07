import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

import { ListCreatedEvent } from '../events/list-created.event';

@Injectable()
export class PublishListCreatedListener {
  constructor(
    @InjectQueue('default')
    private queue: Queue,
  ) {}

  @OnEvent('list.created')
  async handle(event: ListCreatedEvent): Promise<void> {
    await this.queue.add('list.created', event);
  }
}
