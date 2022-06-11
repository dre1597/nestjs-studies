import { Field, InputType } from '@nestjs/graphql';
import { UpdateLessonInput } from 'src/modules/lessons/dto';

@InputType()
export class CreateContentInput {
  description: string;
  linkContent?: string;

  @Field(() => UpdateLessonInput)
  lesson: UpdateLessonInput;

  //Is possible to just use lessonId too
}
