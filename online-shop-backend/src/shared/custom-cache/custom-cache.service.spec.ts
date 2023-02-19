import { CacheModule } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { CustomCacheService } from './custom-cache.service';

describe('CustomCacheService', () => {
  let service: CustomCacheService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        CacheModule.register({
          ttl: 9999999999,
        }),
      ],
      providers: [CustomCacheService],
    }).compile();

    service = module.get<CustomCacheService>(CustomCacheService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
