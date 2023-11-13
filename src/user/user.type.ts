import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class UserType {
  @Field()
  username: string;

  @Field()
  password: string;
}
