import { makeRemoteExecutableSchema, introspectSchema } from 'graphql-tools';
import { makeBindingClass } from 'graphql-binding';
import { HttpLink, FetchOptions } from 'apollo-link-http';
import fetch from 'node-fetch';

interface BindingConstructor<T> {
  new(...args: any[]): T
}

export default async function<T>(uri: string, token?: string): Promise<T> {
  const linkParams = <FetchOptions>{
    uri,
    fetch: fetch,
  }

  if (token) linkParams.headers = { Authorization: `Bearer ${token}` };

  const link = new HttpLink(linkParams);
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