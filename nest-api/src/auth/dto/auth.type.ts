import { User } from './../../user/user.entity';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class AuthType {
  @Field(() => User)
  user: User;

  @Field()
  token: string;
}
