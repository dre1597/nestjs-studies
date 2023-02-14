import { FindAllCitiesByStateRo } from '../boundary';

export abstract class CityRepository {
  abstract findAllByState(stateId: string): Promise<FindAllCitiesByStateRo[]>;
}
