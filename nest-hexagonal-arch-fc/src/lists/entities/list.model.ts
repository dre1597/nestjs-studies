import { Column, Model, Table } from 'sequelize-typescript';

export type ListAttributes = {
  name: string;
};

@Table({
  tableName: 'lists',
})
export class ListModel extends Model<ListAttributes> {
  @Column
  name: string;
}
