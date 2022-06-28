import crypto from 'crypto';

import { LatLng, RouteProps } from './index';

export class Route {
  public readonly id: string;
  public props: Required<RouteProps>;

  private constructor(props: RouteProps, id?: string) {
    this.id = id || crypto.randomUUID();

    if (!props) {
      //@ts-expect-error used for ORM
      this.props = {};
      return;
    }
    this.props = { ...props, points: props.points || [] };
  }

  static create(props: RouteProps, id?: string): Route {
    return new Route(props, id);
  }

  public get title(): string {
    return this.props.title;
  }

  private set title(title: string) {
    this.props.title = title;
  }

  public get startPosition(): LatLng {
    return this.props.startPosition;
  }

  private set startPosition(startPosition: LatLng) {
    this.props.startPosition = startPosition;
  }

  public get endPosition(): LatLng {
    return this.props.endPosition;
  }

  private set endPosition(endPosition: LatLng) {
    this.props.endPosition = endPosition;
  }

  public get points(): LatLng[] {
    return this.props.points;
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
