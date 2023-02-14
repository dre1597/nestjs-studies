import { BaseEntity } from '../../../shared/entity';

export class AddressEntity extends BaseEntity {
  complement?: string;
  numberAdress: number;
  cep: string;
  userId: string;
  cityId: string;
}
