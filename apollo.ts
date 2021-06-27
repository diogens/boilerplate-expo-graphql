import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  createHttpLink
} from '@apollo/client'
import { NormalizedCacheObject } from '@apollo/client/cache/inmemory/types'
import { setContext } from '@apollo/client/link/context'

const GRAPHQL_API_URL = 'https://api.spacex.land/graphql'

const asyncAuthLink = setContext(async () => {
  const TOKEN = ''
  return {
    headers: {
      Authorization: TOKEN ? `Bearer ${JSON.parse(TOKEN)}` : ``
    }
  }
})

/* const httpLink = createHttpLink({
  uri: GRAPHQL_API_URL
}) */

const httpLink = new HttpLink({
  uri: GRAPHQL_API_URL
})

export const apolloClient = new ApolloClient<NormalizedCacheObject>({
  /* link: asyncAuthLink.concat(httpLink), */
  cache: new InMemoryCache(),
  link: httpLink
})
