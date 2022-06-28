import crypto from 'crypto';

import { LatLng, RouteProps } from './index';

export class Route {
  public readonly id: string;
  public props: Required<RouteProps>;

  constructor(props: RouteProps, id?: string) {
    this.id = id || crypto.randomUUID();
    this.props = { ...props, points: props.points || [] };
  }

  public get title(): string {
    return this.props.title;
  }

  public get startPosition(): LatLng {
    return this.props.startPosition;
  }

  public get endPosition(): LatLng {
    return this.props.endPosition;
  }

  public get points(): LatLng[] {
    return this.props.points;
  }

  private set startPosition(startPosition: LatLng) {
    this.props.startPosition = startPosition;
  }

  private set endPosition(endPosition: LatLng) {
    this.props.endPosition = endPosition;
  }

  private set title(title: string) {
    this.props.title = title;
  }

  private set points(points: LatLng[]) {
    this.props.points = points;
  }

  public updatePosition(startPosition: LatLng, endPosition: LatLng): void {
    this.startPosition = startPosition;
    this.endPosition = endPosition;
  }

  public updateTitle(title: string): void {
    this.title = title;
  }

  public updatePoints(points: LatLng[]): void {
    this.points = points;
  }

  public toJSON() {
    return { id: this.id, ...this.props };
  }
}
