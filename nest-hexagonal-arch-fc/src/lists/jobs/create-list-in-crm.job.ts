import { OnQueueFailed, Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { Inject } from '@nestjs/common';

import { ListRepositoryInterface } from '../repositories/list-repository.interface';
import { ListCreatedEvent } from '../events/list-created.event';

@Processor()
export class CreateListInCrmJob {
  constructor(
    @Inject('ListIntegrationRepository')
    private listIntegrationRepository: ListRepositoryInterface,
  ) {}

  @Process('list.created')
  async handle(job: Job<ListCreatedEvent>): Promise<void> {
    console.log('job running...');
    console.log(job.data);
    const event = job.data;
    await this.listIntegrationRepository.create(event.list);
  }

  @OnQueueFailed({ name: 'list.created' })
  handleError(error: Error) {
    console.error('error', error);
  }
}
