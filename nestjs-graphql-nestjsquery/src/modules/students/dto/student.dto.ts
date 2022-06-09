import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Student')
export class StudentDto {
  @Field()
  id: string;

  @FilterableField()
  name: string;

  @FilterableField()
  key: string;
}
