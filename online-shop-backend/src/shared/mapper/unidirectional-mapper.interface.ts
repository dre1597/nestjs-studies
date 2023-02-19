export interface UnidirectionalMapper<I, O> {
  map(object: I): O;
}
