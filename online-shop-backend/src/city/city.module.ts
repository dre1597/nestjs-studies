import { Module } from '@nestjs/common';

import { CustomCacheModule } from '../custom-cache/custom-cache.module';
import { PrismaService } from '../database';
import { CityController } from './controller';
import { CityRepository, PrismaCityRepository } from './repository';
import { CityService } from './service';

@Module({
  imports: [CustomCacheModule],
  controllers: [CityController],
  providers: [
    CityService,
    PrismaService,
    {
      provide: CityRepository,
      useClass: PrismaCityRepository,
    },
  ],
})
export class CityModule {}
