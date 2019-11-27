import React, {
  ReactElement,
  createContext,
  useEffect,
  useState,
} from 'react';
import { IData, IOffer, IProduct, IContextProviderProps } from '../interfaces';

import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks';

const defaultData: IData = {
  name: '',
  balance: 0,
  offers: []
};

const UserDataQuery = gql`
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



export const ContextProvider = (props: IContextProviderProps): ReactElement => {

  const { data } = useQuery(UserDataQuery);

  return (
    <DataContext.Provider
      value={{ data }}>
      {props.children}
    </DataContext.Provider>
  );
};

export const DataContext = createContext({});


