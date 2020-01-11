import React, { FunctionComponent } from 'react';
import { SafeAreaCenteredContainer } from '../../styles/components';
import { useQuery } from '@apollo/react-hooks';
import { USER_DATA } from '../../schemas/userSchema';
import { useNavigation } from 'react-navigation-hooks';
import UserAccountComp from './components/userAccount';

const UserAccount: FunctionComponent = () => {
  const { navigate } = useNavigation();
  const { data, loading, error } = useQuery(USER_DATA);
  
  return (
    <SafeAreaCenteredContainer>
      <UserAccountComp data={data} loading={loading} navigate={navigate} error={error}/>
    </SafeAreaCenteredContainer>
  );
};

export default UserAccount;
