import { BaseEntity } from '../shared';
import { CityProps } from './types';

export class CityEntity extends BaseEntity {
  public props: Required<CityProps>;

  private constructor(props: CityProps, id?: string) {
    super(id);

    if (id) {
      this.updateUpdateAt();
    }

    this.props = props;
  }

  static create(props: CityProps, id?: string): CityEntity {
    return new CityEntity(props, id);
  }
}
