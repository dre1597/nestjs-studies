import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDto } from '../../../common/dto';

@ObjectType('Student')
export class StudentDto extends BaseDto {
  @FilterableField()
  name: string;

  @FilterableField()
  key: string;
}
