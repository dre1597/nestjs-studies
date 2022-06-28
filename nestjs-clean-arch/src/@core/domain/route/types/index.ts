export type LatLng = {
  lat: number;
  lng: number;
};

export type RouteProps = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
};
