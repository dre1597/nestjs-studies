import { BaseEntity } from '../../shared/entity';
import { USER_ROLES } from './role.enum';

export class UserEntity extends BaseEntity {
  name: string;
  password: string;
  email: string;
  phone: string;
  cpf: string;
  role?: USER_ROLES;
}
