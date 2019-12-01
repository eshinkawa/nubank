import gql from 'graphql-tag';

export const PURCHASE = gql`
  mutation purchase($id: ID!){
    purchase(offerId: $id) {
      success
      customer {
        name
        balance
      }
    }
  }
`;
