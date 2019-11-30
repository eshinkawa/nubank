import React, { ReactElement, useState } from 'react';
import { ScrollView } from 'react-native';
import { useMutation } from '@apollo/react-hooks';
import { useNavigation } from 'react-navigation-hooks';
import { SafeAreaCenteredContainer, Colors } from '../../styles/base';
import { PURCHASE } from '../../schemas/purchaseSchema';
import OfferComp from './components/offer';

const Offer = (): ReactElement => {
  const { getParam } = useNavigation();
  const item = getParam('item');
  const balance = getParam('balance');
  const [purchase] = useMutation(PURCHASE, {
    variables: { id: item.id }
  });
  const [modal, setModal] = useState(false);

  const obj = {
    item, balance, modal, setModal
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
