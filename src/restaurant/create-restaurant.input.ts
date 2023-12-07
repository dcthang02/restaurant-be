import { Field, InputType } from '@nestjs/graphql';
import { AddressType } from './restaurant.type';
import { IsPhoneNumber } from 'class-validator';

@InputType()
export class CreateRestaurantInput {
  @Field()
  name: string;

  @Field(() => AddressType)
  address: AddressType;

  @IsPhoneNumber()
  @Field()
  phone: string;
}
