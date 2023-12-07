import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Restaurant } from './restaurant.schema';
import { Model } from 'mongoose';
import { CreateRestaurantInput } from './create-restaurant.input';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel(Restaurant.name) private restaurantModel: Model<Restaurant>,
  ) {}

  async createRestaurant(createRestaurantInput: CreateRestaurantInput) {
    const { name, address, phone } = createRestaurantInput;
    const newRestaurant = new this.restaurantModel({
      name,
      address,
      phone,
    });

    await newRestaurant.save();
    return newRestaurant;
  }
}
