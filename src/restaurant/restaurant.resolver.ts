import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { RestaurantService } from './restaurant.service';
import { RestaurantType } from './restaurant.type';
import { CreateRestaurantInput } from './create-restaurant.input';

@Resolver()
export class RestaurantResolver {
  constructor(private restaurantService: RestaurantService) {}

  @Mutation((returns) => RestaurantType)
  createRestaurant(
    @Args('createRestaurantInput') createRestaurantInput: CreateRestaurantInput,
  ) {
    return this.restaurantService.createRestaurant(createRestaurantInput);
  }
}
