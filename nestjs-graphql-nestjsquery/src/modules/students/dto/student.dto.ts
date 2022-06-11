import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { DisciplineDto } from '../../../modules/disciplines/dto';
import { BaseDto } from '../../../common/dto';

@ObjectType('Student')
@FilterableOffsetConnection('disciplines', () => DisciplineDto, {
  nullable: true,
})
export class StudentDto extends BaseDto {
  @FilterableField()
  name: string;

  @FilterableField()
  key: string;
}
