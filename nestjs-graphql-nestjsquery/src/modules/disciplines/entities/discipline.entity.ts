import { Student } from '../../../modules/students/entities';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from '../../../common/entities';

@Entity()
export class Discipline extends BaseEntity {
  @Column()
  name: string;

  @ManyToMany(() => Student, (student) => student.disciplines, {
    nullable: true,
  })
  @JoinTable()
  students: Student[];
}
