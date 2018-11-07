import { ObjectType } from 'type-graphql';

import { ICity } from './interface';
import { IState } from '../state';

@ObjectType({ implements: ICity })
export class City implements ICity {
  id!: number;
  title!: string;
  state!: IState;
}
