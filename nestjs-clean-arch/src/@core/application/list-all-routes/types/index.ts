import { LatLng } from '../../../domain';

export type ListAllRoutesOutput = {
  id: string;
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
}[];
