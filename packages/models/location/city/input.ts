import { InputType, Field } from 'type-graphql';

import { City } from './type';
  
@InputType()
export class CityInput implements Partial<City> {
  @Field()
  title!: string;

  @Field()
  stateId!: string;
}
