import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../common/entities';

@Entity()
export class Content extends BaseEntity {
  @Column()
  description: string;

  @Column()
  linkContent: string;
}
