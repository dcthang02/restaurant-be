import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { AddressType } from './restaurant.type';

export type RestaurantDocument = HydratedDocument<Restaurant>;

@Schema({ timestamps: true })
export class Restaurant {
  @Prop({ required: true })
  name: string;

  @Prop({
    type: AddressType,
    required: true,
    raw: raw({
      province: { type: String },
      district: { type: String },
      ward: { type: String },
      address: { type: String },
    }),
  })
  address: Record<string, any>;

  @Prop([String])
  images: string[];

  @Prop({ required: true })
  phone: string;

  @Prop({ default: null })
  email: string;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
