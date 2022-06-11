import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { StudentDto } from '../../../modules/students/dto';
import { BaseDto } from '../../../common/dto';

@ObjectType('Discipline')
@FilterableOffsetConnection('students', () => StudentDto, {
  nullable: true,
})
export class DisciplineDto extends BaseDto {
  @FilterableField()
  name: string;
}
