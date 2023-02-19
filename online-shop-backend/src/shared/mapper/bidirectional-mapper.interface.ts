import { UnidirectionalMapper } from './unidirectional-mapper.interface';

export interface BidirectionalMapperInterface<I, O>
  extends UnidirectionalMapper<I, O> {
  inverseMap(O: object): I;
}
