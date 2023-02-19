import { BaseEntity } from '../shared';
import { AddressProps } from './types';

export class AddressEntity extends BaseEntity {
  public props: AddressProps;

  private constructor(props: AddressProps, id?: string) {
    super(id);

    if (id) {
      this.updateUpdateAt();
    }

    this.props = props;
  }

  static create(props: AddressProps, id?: string): AddressEntity {
    return new AddressEntity(props, id);
  }
}
