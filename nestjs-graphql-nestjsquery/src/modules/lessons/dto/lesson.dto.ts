import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDto } from '../../../common/dto';

@ObjectType('Lesson')
export class LessonDto extends BaseDto {
  @FilterableField()
  description: string;
}
