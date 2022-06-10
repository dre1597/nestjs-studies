import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDto } from '../../../common/dto/base.dto';

@ObjectType('Discipline')
export class DisciplineDto extends BaseDto {
  @FilterableField()
  name: string;
}
