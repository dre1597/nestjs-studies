type Lng = {
  lat: number;
  lng: number;
};

export class CreateRouteDto {
  title: string;
  startPosition: Lng;
  endPosition: Lng;
  points?: Lng[];
}
