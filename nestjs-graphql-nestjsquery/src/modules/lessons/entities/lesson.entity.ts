import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../common/entities';

@Entity()
export class Lesson extends BaseEntity {
  @Column()
  description: string;
}
