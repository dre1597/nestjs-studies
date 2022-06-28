import { Route } from '../../../../../domain';
import { EntitySchema } from 'typeorm';

export const RouteSchema = new EntitySchema<Route>({
  name: 'route',
  target: Route,
  columns: {
    id: {
      type: 'uuid',
      primary: true,
    },
    title: {
      type: 'varchar',
      length: 255,
    },
    startPosition: {
      type: 'simple-json',
    },
    endPosition: {
      type: 'simple-json',
    },
    points: {
      type: 'simple-json',
    },
  },
});
