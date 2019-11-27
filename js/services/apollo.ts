import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http'; 
import { InMemoryCache } from 'apollo-cache-inmemory';

const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhd2Vzb21lY3VzdG9tZXJAZ21haWwuY29tIn0.cGT2KqtmT8KNIJhyww3T8fAzUsCD5_vxuHl5WbXtp8c';

const httpLink = new HttpLink({
  uri: 'https://staging-nu-needful-things.nubank.com.br/query',
  headers: {
    authorization: `Bearer ${bearerToken}`,
  }
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;