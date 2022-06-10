import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../common/entities';

@Entity()
export class Discipline extends BaseEntity {
  @Column()
  name: string;
}
