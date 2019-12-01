import React, { ReactElement, useState } from 'react';
import { ScrollView } from 'react-native';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useNavigation } from 'react-navigation-hooks';
import { SafeAreaCenteredContainer, Colors } from '../../styles/base';
import { PURCHASE } from '../../schemas/purchaseSchema';
import OfferComp from './components/offer';
import { USER_DATA } from '../../schemas/userSchema';

const Offer = (): ReactElement => {
  const { getParam, navigate } = useNavigation();
  const index = getParam('index');
  const { data: userData, client } = useQuery(USER_DATA);
  const balance = userData.viewer.balance;
  const item = userData.viewer.offers[index]; 
  const [modal, setModal] = useState(false);
  
  const [purchase, {data, loading: mutationLoading}] = useMutation(PURCHASE, {
    variables: { id: item.id },
    update(
      cache,
      {
        data
      }
    ) {
      const { viewer } = cache.readQuery({ query: USER_DATA });
      cache.writeQuery({
        query: USER_DATA,
        data: { viewer: { ...viewer, balance: data.purchase.customer.balance } }
      });
    }
  });

  const navigateToAccount = () => {
    navigate('UserAccount');
  }

  const obj = {
    item, balance, modal, setModal, purchase, navigateToAccount, mutationLoading, client
  }
  

  return (
    <SafeAreaCenteredContainer bgColor={Colors.white}>
      <ScrollView>
        <OfferComp {...obj}/>
      </ScrollView>
    </SafeAreaCenteredContainer>
  );
};

export default Offer;
