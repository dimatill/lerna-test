import { InterfaceType, Field, ID } from 'type-graphql';

import { IResource } from '@astrumu/test_core/resource.interface';
import { IState } from '@astrumu/test_models-state/interface';

@InterfaceType()
export abstract class ICity implements IResource {
  @Field(type => ID)
  readonly id!: number;

  @Field()
  title!: string;

  @Field(type => IState)
  state!: IState;
}
