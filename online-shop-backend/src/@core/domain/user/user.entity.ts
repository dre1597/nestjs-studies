import { BaseEntity } from '../shared';
import { USER_ROLES, UserProps } from './types';

export class UserEntity extends BaseEntity {
  public props: Required<UserProps>;

  private constructor(props: UserProps, id?: string, role?: USER_ROLES) {
    super(id);

    if (id) {
      this.updateUpdateAt();
    }

    this.props = { ...props, role: role || 'USER' };
  }

  static create(props: UserProps, id?: string, role?: USER_ROLES): UserEntity {
    return new UserEntity(props, id, role);
  }
}
