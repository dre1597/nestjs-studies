import {
  FilterableField,
  FilterableRelation,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { LessonDto } from '../../../modules/lessons/dto';
import { BaseDto } from '../../../common/dto';

@ObjectType('Content')
@FilterableRelation('lesson', () => LessonDto)
export class ContentDto extends BaseDto {
  @FilterableField()
  description: string;

  @FilterableField({ nullable: true })
  linkContent: string;
}
