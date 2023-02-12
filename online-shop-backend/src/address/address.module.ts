import { Module } from '@nestjs/common';

import { AddressController } from './controller';
import { AddressService } from './service';

@Module({
  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModule {}
