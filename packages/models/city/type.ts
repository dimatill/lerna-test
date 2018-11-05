import { ObjectType } from 'type-graphql';

import { ICity } from './interface';
import { IState } from '@astrumu/test_models-state/interface';

@ObjectType({ implements: ICity })
export class City implements ICity {
  id!: number;
  title!: string;
  state!: IState;
}
