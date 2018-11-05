import { InputType, Field, ID } from 'type-graphql';

import { State } from './type';

@InputType()
export class StateInput implements Partial<State> {
  @Field(type => ID)
  id!: string;

  @Field()
  title!: string;
}
