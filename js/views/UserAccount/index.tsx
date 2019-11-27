import React, { FunctionComponent, useContext } from 'react';
import { CenteredContainer } from '../../styles/components';
import { View, Text } from 'react-native';
import { DataContext } from '../../provider';

const UserAccount: FunctionComponent = () => {
  const { data } = useContext(DataContext);
  return (
    <CenteredContainer>
        <Text style={{color: 'black'}}>{data.viewer.name}</Text>  
        <Text style={{color: 'black'}}>{data.viewer.balance}</Text>
        {data.viewer.offers.map(item => (
          <Text>{item.id}</Text>
        ))}
    </CenteredContainer>
  );
};

export default UserAccount;
