import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateContentInput {
  @Field(() => String)
  description: string;

  @Field(() => String, { nullable: true })
  linkContent?: string;
}
