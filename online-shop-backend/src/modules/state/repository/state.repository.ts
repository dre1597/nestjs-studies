import { FindAllStatesRo } from '../boundary';

export abstract class StateRepository {
  abstract findAll(): Promise<FindAllStatesRo[]>;
}
