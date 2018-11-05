import { ObjectType } from 'type-graphql';

import { IState } from './interface';
import { ICity } from '../city/interface';

@ObjectType({ implements: IState })
export class State implements IState {
  id!: string;
  title!: string;
  cities!: ICity[];
}
