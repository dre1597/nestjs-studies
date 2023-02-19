import { BaseEntity } from '../shared';
import { StateProps } from './types';

export class StateEntity extends BaseEntity {
  public props: StateProps;

  private constructor(props: StateProps, id?: string) {
    super(id);

    if (id) {
      this.updateUpdateAt();
    }

    this.props = props;
  }

  static create(props: StateProps, id?: string): StateEntity {
    return new StateEntity(props, id);
  }
}
