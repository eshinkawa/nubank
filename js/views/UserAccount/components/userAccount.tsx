import React, { ReactElement, FunctionComponent } from 'react';
import { Colors, VertSpacing } from '../../../styles/base';
import { Image, TouchableOpacity, ActivityIndicator, ScrollView, Text } from 'react-native';
import { currencyBRMask } from '../../../utils/utils'
import { Header, RoundUserImage, Offers, BoxOffer, UpperOfferBox, LowerOfferBox, BalanceBox, TextName, TextOffer, TextCenter, TextCenterWrap } from '../styles';
import { IOffer, IData } from '../../../interfaces';
interface IUserAccountCompProps {
  data: { viewer: IData },
  loading: boolean,
  navigate: Function,
  error: any
}

const UserAccountComp = ({data, loading, navigate, error = false}: IUserAccountCompProps): ReactElement => {
  return (
    <>{loading ? <ActivityIndicator size="large" testID="SpinnerUserAccount"/> :
      <ScrollView>
          <Header>
            <RoundUserImage>
              <Image
                source={{ uri: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg' }}
                style={{ width: 70, height: 70, borderRadius: 50 }}
              />
            </RoundUserImage>
            <TextName color={Colors.white} size={18} weight={'semiBold'}>{data.viewer.name || ''}</TextName>
          </Header>
          <BalanceBox>
            <TextCenter color={Colors.white} size={16} weight={'regular'}>Seu balanço é de:</TextCenter>
            <TextCenter color={'#763892'} size={28} weight={'bold'}>{currencyBRMask(data.viewer.balance) || 0}</TextCenter>
          </BalanceBox>
          <TextOffer color={'#000'} size={24} weight={'regular'}>Ofertas disponíveis!</TextOffer>
          <Offers testID="Offers">
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
                    <TextCenterWrap color={'#5B5855'} size={14} weight={'bold'}>{item.product.name}</TextCenterWrap>
                    <VertSpacing size={6} />
                    <TextCenter color={'purple'} size={16} weight={'regular'}>{currencyBRMask(item.price)}</TextCenter>
                  </LowerOfferBox>
                </BoxOffer>
              </TouchableOpacity>
            ))}
          </Offers>
        </ScrollView>}
        {error && <Text testID="ErrorUserAccount">Error fetching data</Text>}
      </>
  );
};

export default UserAccountComp;
