import { FindAllByStateRo } from '../boundary';

export abstract class CityRepository {
  abstract findAllByState(stateId: string): Promise<FindAllByStateRo[]>;
}
