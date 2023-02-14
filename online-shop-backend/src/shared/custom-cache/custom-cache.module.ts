import { CacheModule, Module } from '@nestjs/common';

import { CustomCacheService } from './custom-cache.service';

@Module({
  imports: [
    CacheModule.register({
      ttl: 9999999999,
    }),
  ],
  providers: [CustomCacheService],
  exports: [CustomCacheService],
})
export class CustomCacheModule {}
