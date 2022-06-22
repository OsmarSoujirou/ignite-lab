import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oshl4b15rs01w709wegp3y/master',
  cache: new InMemoryCache()
})