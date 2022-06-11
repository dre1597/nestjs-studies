import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../common/entities';
import { Lesson } from '../../../modules/lessons/entities';

@Entity()
export class Content extends BaseEntity {
  @Column()
  description: string;

  @Column()
  linkContent: string;

  @ManyToOne(() => Lesson)
  lesson: Lesson;

  //Is possible to just use lessonId too
}
