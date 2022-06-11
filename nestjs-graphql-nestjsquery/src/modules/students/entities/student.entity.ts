import { Discipline } from '../../../modules/disciplines/entities';
import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from '../../../common/entities';

@Entity()
export class Student extends BaseEntity {
  @Column()
  name: string;

  @Column()
  key: string;

  @ManyToMany(() => Discipline, (discipline) => discipline.students, {
    nullable: true,
  })
  disciplines: Discipline[];
}
