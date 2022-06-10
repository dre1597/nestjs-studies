import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity()
export class Student extends BaseEntity {
  @Column()
  name: string;

  @Column()
  key: string;
}
