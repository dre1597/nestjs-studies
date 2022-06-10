import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateLessonInput {
  @Field(() => String)
  description: string;
}
