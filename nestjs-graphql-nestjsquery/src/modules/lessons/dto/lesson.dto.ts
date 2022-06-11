import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDto } from '../../../common/dto';
import { ContentDto } from '../../../modules/contents/dto';

@ObjectType('Lesson')
@FilterableOffsetConnection('contents', () => ContentDto, { nullable: true })
export class LessonDto extends BaseDto {
  @FilterableField()
  description: string;
}
