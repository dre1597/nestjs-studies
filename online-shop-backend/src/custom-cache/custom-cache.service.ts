import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CustomCacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getCache<T>(key: string, getData: () => Promise<T>): Promise<T> {
    const cachedData: T = await this.cacheManager.get(key);

    if (cachedData) return cachedData;

    const data: T = await getData();

    await this.cacheManager.set(key, data);

    return data;
  }
}
