import { Module } from '@nestjs/common';

import { CityController } from './controller';
import { CityService } from './service';

@Module({
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
