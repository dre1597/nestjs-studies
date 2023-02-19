import { CityEntity } from './city.entity';

export abstract class CityRepository {
  abstract findAllByState(stateId: string): Promise<CityEntity[]>;
}
