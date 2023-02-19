import { StateEntity } from './state.entity';

export abstract class StateRepository {
  abstract findAll(): Promise<StateEntity[]>;
}
