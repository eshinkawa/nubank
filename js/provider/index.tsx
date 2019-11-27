import React, {
  ReactElement,
  createContext,
  useEffect,
  useState,
} from 'react';
import { IContextProviderProps } from '../interfaces';

import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks';

const defaultData = {
  name: false,
  balance: 0,
  offers: [],
  product: {}
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

  const [userData, setUserData] = useState(defaultData);
  const { loading, data } = useQuery(UserDataQuery);
  console.log(data.viewer.name);
  return (  
    <DataContext.Provider
      value={{ data }}>
      {props.children}
    </DataContext.Provider>
  );
};

export const DataContext = createContext(defaultData);


