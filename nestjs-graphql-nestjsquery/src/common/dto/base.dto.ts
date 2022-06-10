import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseDto {
  @FilterableField()
  id: string;

  @FilterableField()
  createdAt: Date;

  @FilterableField()
  updatedAt: Date;

  @FilterableField()
  deletedAt: Date;
}
