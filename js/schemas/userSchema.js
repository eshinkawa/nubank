import gql from 'graphql-tag'

export const USER_DATA = gql`
  {
    viewer {
      name
      balance
      offers {
        id
        price
        product {
          id
          name
          description
          image
        }
      }
    }
  }
`;