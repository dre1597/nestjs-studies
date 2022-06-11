import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDto } from '../../../common/dto';

@ObjectType('Content')
export class ContentDto extends BaseDto {
  @FilterableField()
  description: string;

  @FilterableField({ nullable: true })
  linkContent: string;
}
