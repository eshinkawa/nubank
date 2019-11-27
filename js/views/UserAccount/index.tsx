import React, { FunctionComponent } from 'react';
import { CenteredContainer } from '../../styles/components';
import { Text } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { USER_DATA } from '../../schemas/userSchema';

const UserAccount: FunctionComponent = () => {
  const { data } = useQuery(USER_DATA);
  return (
    <CenteredContainer>
      <Text style={{ color: 'black', fontFamily: 'OpenSans-Regular', fontSize: 50 }}>Olá</Text>
      <Text style={{ color: 'black', fontFamily: 'OpenSans-Bold', fontSize: 50 }}>{data.viewer.name || ''}</Text>
      <Text style={{ color: 'black' }}>{data.viewer.balance || ''}</Text>
    </CenteredContainer>
  );
};

export default UserAccount;
