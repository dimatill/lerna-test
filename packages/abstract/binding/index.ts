import { makeRemoteExecutableSchema, introspectSchema } from 'graphql-tools';
import { Binding, BindingOptions, makeBindingClass } from 'graphql-binding';
import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

interface BindingConstructor<T> {
  new(...args: any[]): T
}

export default async function<T>(uri, token): Promise<T> {
  const link = new HttpLink({ 
    uri,
    fetch: <GlobalFetch['fetch']><unknown>fetch,
    headers: { Authorization: `Bearer ${token}` },
  });
  const schema = await introspectSchema(link);

  const executableSchema = makeRemoteExecutableSchema({
    schema,
    link
  });

  const Binding = makeBindingClass<BindingConstructor<T>>({
    schema: executableSchema
  });

  return new Binding();
};