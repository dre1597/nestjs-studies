import { LatLng, Route, RouteProps } from './index';
import { routeObjectWithoutPoints, routeObjectWithPoints } from './mocks';

export const createRoute = (routeProps: RouteProps): Route => {
  return new Route(routeProps);
};

describe('Route Entity', (): void => {
  it('should be possible to create a new route without points', (): void => {
    const routeProps: RouteProps = routeObjectWithoutPoints();
    const routeWithoutPoints: Route = createRoute(routeProps);

    expect(routeWithoutPoints.id).toBeDefined();
    expect(routeWithoutPoints.props).toStrictEqual({
      ...routeProps,
      points: [],
    });
  });

  it('should be possible to create a new route with points', (): void => {
    const routeProps: RouteProps = routeObjectWithPoints();
    const routeWithPoints: Route = createRoute(routeProps);

    expect(routeWithPoints.id).toBeDefined();
    expect(routeWithPoints.props).toStrictEqual({
      ...routeProps,
      points: [{ lat: 0, lng: 0 }],
    });
  });

  it('should be possible to update the title', (): void => {
    const routeProps: RouteProps = routeObjectWithoutPoints();
    const route: Route = createRoute(routeProps);

    route.updateTitle('updated_title');
    expect(route.title).toBe('updated_title');
  });

  it('should be possible to update the positions', (): void => {
    const routeProps: RouteProps = routeObjectWithoutPoints();
    const route: Route = createRoute(routeProps);

    const startPosition = { lat: 1, lng: 1 };
    const endPosition = { lat: 2, lng: 2 };

    route.updatePosition(startPosition, endPosition);
    expect(route.startPosition).toEqual(startPosition);
    expect(route.endPosition).toEqual(endPosition);
  });

  it('should be possible to update points', (): void => {
    const routeProps: RouteProps = routeObjectWithoutPoints();
    const route: Route = createRoute(routeProps);

    const points: LatLng[] = [
      { lat: 0, lng: 0 },
      { lat: 1, lng: 1 },
    ];

    route.updatePoints(points);

    expect(route.points).toHaveLength(2);
    expect(route.points).toStrictEqual(points);
  });
});
