import { Content } from '../../../modules/contents/entities';
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../common/entities';

@Entity()
export class Lesson extends BaseEntity {
  @Column()
  description: string;

  @OneToMany(() => Content, (content) => content.lesson)
  contents: Content[];
}
