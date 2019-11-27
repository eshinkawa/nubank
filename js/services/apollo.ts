import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http'; 
import { InMemoryCache } from 'apollo-cache-inmemory';

import { BEARER_TOKEN, BASE_URL } from '../utils/constans'

const httpLink = new HttpLink({
  uri: BASE_URL,
  headers: {
    authorization: BEARER_TOKEN,
  }
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;