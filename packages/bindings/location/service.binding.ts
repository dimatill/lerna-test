import { makeBindingClass, Options } from 'graphql-binding'
import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import schema from  './schema'
   
export interface Query {
    state: <T = State>(args: { stateId: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    states: <T = State[]>(args?: {}, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    city: <T = City>(args: { cityId: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    cities: <T = City[]>(args?: {}, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    addState: <T = State>(args: { state: StateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    addCity: <T = City>(args: { city: CityInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {}

export interface Binding {
  query: Query
  mutation: Mutation
  subscription: Subscription
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
      [key: string]: any;
  }, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
  delegateSubscription(fieldName: string, args?: {
      [key: string]: any;
  }, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
  getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(...args): T
}

export const Binding = makeBindingClass<BindingConstructor<Binding>>({ schema })

/**
 * Types
*/

export interface CityInput {
  title: String
  stateId: String
}

export interface StateInput {
  id: ID_Input
  title: String
}

export interface City {
  id: ID_Output
  title: String
  state: State
}

export interface State {
  id: ID_Output
  title: String
  cities: City[]
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string