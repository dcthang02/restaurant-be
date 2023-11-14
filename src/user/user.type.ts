import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class UserType {
  @Field(() => ID)
  _id: string;

  @Field()
  username: string;

  @Field()
  password: string;
}
