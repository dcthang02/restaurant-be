import { Field, InputType } from '@nestjs/graphql';
import { MaxLength, MinLength } from 'class-validator';

@InputType()
export class AuthInput {
  @MinLength(6)
  @Field()
  username: string;

  @MinLength(6)
  @Field()
  password: string;
}
