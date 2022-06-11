import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { CreateDisciplineInput } from './create-discipline.input';

@InputType()
export class UpdateDisciplineInput extends PartialType(CreateDisciplineInput) {
  @Field(() => ID)
  id?: string;
}
