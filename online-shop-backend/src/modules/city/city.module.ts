import { Module } from '@nestjs/common';

import { CustomCacheModule } from '../../shared/custom-cache/custom-cache.module';
import { PrismaService } from '../../shared/database';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { CityRepository, PrismaCityRepository } from './repository';

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
