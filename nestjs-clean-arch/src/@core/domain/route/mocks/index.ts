import { RouteProps } from '../../../domain';

export const routeObjectWithoutPoints = (): RouteProps => {
  return {
    title: 'any_title',
    startPosition: { lat: 0, lng: 0 },
    endPosition: { lat: 0, lng: 0 },
  };
};

export const routeObjectWithPoints = (): RouteProps => {
  return {
    title: 'any_title',
    startPosition: { lat: 0, lng: 0 },
    endPosition: { lat: 0, lng: 0 },
    points: [{ lat: 0, lng: 0 }],
  };
};
