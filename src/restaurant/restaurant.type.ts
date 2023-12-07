import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('AddressInput')
@ObjectType('AddressType')
export class AddressType {
  @Field()
  province: string;

  @Field()
  district: string;

  @Field()
  ward: string;

  @Field()
  address: string;
}

@ObjectType('Restaurant')
export class RestaurantType {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field(() => AddressType)
  address: AddressType;

  @Field()
  phone: string;
}
