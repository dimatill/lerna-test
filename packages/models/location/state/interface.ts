import { InterfaceType, Field, ID } from 'type-graphql';

import { IResource } from '@astrumu/test_core/resource.interface';
import { ICity } from '../city';

@InterfaceType()
export abstract class IState implements IResource {
  @Field(type => ID)
  id!: string;

  @Field()
  title!: string;

  @Field(type => [ICity])
  cities!: ICity[]
}
