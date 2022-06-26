import { InjectQueue } from '@nestjs/bull';
import { CACHE_MANAGER, Inject, Injectable, Logger } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/sequelize';
import { Queue } from 'bull';
import { Cache } from 'cache-manager';
import { Tweet } from '../entities/tweet.entity';

@Injectable()
export class TweetsCountService {
  private _LIMIT = 10;
  private _10MINUTES = 1 * 60 * 10;
  private _logger = new Logger('TweetsCountService');

  constructor(
    @InjectModel(Tweet) private tweetModel: typeof Tweet,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    @InjectQueue('emails') private emailsQueue: Queue,
  ) {}

  @Interval(5000)
  async countTweets() {
    this._logger.log('Searching tweets');
    let offset = await this.cacheManager.get<number>('tweet-offset');
    offset = offset === undefined ? 0 : offset;

    this._logger.log(`offsets: ${offset}`);

    const tweets = await this.tweetModel.findAll({
      offset,
      limit: this._LIMIT,
    });

    this._logger.log(`${tweets.length} encontrados`);

    if (tweets.length === this._LIMIT) {
      this.cacheManager.set('tweet-offset', offset + this._LIMIT, {
        ttl: this._10MINUTES,
      });
      this._logger.log(`Find more ${this._LIMIT} tweets`);
      this.emailsQueue.add({ tweets: tweets.map((tweet) => tweet.toJSON()) });
    }
  }
}
