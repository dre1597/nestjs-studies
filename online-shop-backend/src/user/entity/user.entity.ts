import { BaseEntity } from '../../shared/entity';

export class UserEntity extends BaseEntity {
  name: string;
  password: string;
  email: string;
  phone: string;
  cpf: string;
}
