import { Module } from '@nestjs/common';
import { SendMailWIthTweetsJob } from './send-mail-with-tweets.job';

@Module({
  providers: [SendMailWIthTweetsJob],
})
export class MailingModule {}
