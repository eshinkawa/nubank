import React, { FunctionComponent } from 'react';
import { SafeAreaCenteredContainer } from '../../styles/components';
import { Colors } from '../../styles/base';
import { View, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { USER_DATA } from '../../schemas/userSchema';
import { currencyBRMask } from '../../utils/utils'
import { Header, RoundUserImage, TextContent, Offers, BoxOffer, UpperOfferBox, LowerOfferBox, BalanceBox } from './styles';
import { useNavigation } from 'react-navigation-hooks';
import { IOffer } from '../../interfaces';

const UserAccount: FunctionComponent = () => {
  const { navigate } = useNavigation();
  const { data, loading } = useQuery(USER_DATA);

  console.log('useraccount: ', data);
  
  return (
    <SafeAreaCenteredContainer>
      {loading ? <ActivityIndicator size="large"/> :
        <ScrollView>
          <Header>
            <RoundUserImage>
              <Image
                source={{ uri: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg' }}
                style={{ width: 70, height: 70, borderRadius: 50 }}
              />
            </RoundUserImage>
            <TextContent color={Colors.white} size={18} weight={'semiBold'} style={{ marginBottom: 16 }}>{data.viewer.name || ''}</TextContent>
          </Header>
          <BalanceBox>
            <TextContent color={Colors.white} size={16} weight={'regular'} style={{ textAlign: 'center' }}>Seu balanço é de:</TextContent>
            <TextContent color={'#763892'} size={28} weight={'bold'} style={{ textAlign: 'center' }}>{currencyBRMask(data.viewer.balance) || 0}</TextContent>
          </BalanceBox>
          <TextContent color={'#000'} size={24} weight={'regular'} style={{ padding: 16, paddingBottom: 16 }}>Ofertas disponíveis!</TextContent>
          <Offers>
            {data.viewer.offers.map((item: IOffer, index: number) => (
              <TouchableOpacity onPress={() => navigate('Offer', { item, index })} key={item.id}>
                <BoxOffer>
                  <UpperOfferBox>
                    <Image
                      source={{ uri: item.product.image }}
                      style={{ width: 120, height: 100, borderRadius: 10 }}
                    />
                  </UpperOfferBox>
                  <LowerOfferBox>
                    <TextContent color={'#5B5855'} size={14} weight={'bold'} style={{ textAlign: 'center', flexWrap: 'wrap' }}>{item.product.name}</TextContent>
                    <View style={{ height: 6 }} />
                    <TextContent color={'purple'} size={16} weight={'regular'} style={{ textAlign: 'center' }}>{currencyBRMask(item.price)}</TextContent>
                  </LowerOfferBox>
                </BoxOffer>
              </TouchableOpacity>
            ))}
          </Offers>
        </ScrollView>}
    </SafeAreaCenteredContainer>
  );
};

export default UserAccount;
