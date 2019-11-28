import React, { FunctionComponent, useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { USER_DATA } from '../../schemas/userSchema';
import { useNavigation } from 'react-navigation-hooks';
import { ScreenWidth, SafeAreaCenteredContainer, ScreenHeight, Colors } from '../../styles/base';
import { TextContent } from '../../views/UserAccount/styles';
import { currencyBRMask } from '../../utils/utils';
import { PURCHASE } from '../../schemas/purchaseSchema';


const Offer: FunctionComponent = () => {
  
  const { getParam } = useNavigation();
  const { id, price, product: { name, description, image } } = getParam('item');
  const [purchase, { data, error }] = useMutation(PURCHASE, {
    variables: { id }
  });

  console.log(data, error);


  return (
    <SafeAreaCenteredContainer bgColor={Colors.white}>
      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: ScreenWidth }}>
          <Image
            source={{ uri: image }}
            resizeMode="cover"
            style={{ width: ScreenWidth, height: ScreenHeight / 2.5 }}
          />
        </View>
        <View style={{ flex: 1, padding: 24 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextContent color={'#0A0807'} size={24} weight={'regular'} style={{ textAlign: 'left', marginBottom: 8, flex: 1 }}>{name}</TextContent>
            <TextContent color={'#000'} size={24} weight={'semiBold'} style={{ textAlign: 'right', alignSelf: 'center', marginBottom: 8, flex: 1 }}>{currencyBRMask(price)}</TextContent>
          </View>
          <View style={{ height: 12 }} />
          <TextContent color={'#0A0807'} size={14} weight={'semiBold'} style={{ marginBottom: 8 }}>Descrição</TextContent>
          <TextContent color={Colors.darkGreen} size={16} weight={'bold'} style={{ marginBottom: 8 }}>{description}</TextContent>
          <View style={{ height: 12 }} />
          <TextContent color={'#0A0807'} size={14} weight={'semiBold'} style={{ textAlign: 'left', marginBottom: 8 }}>Código do produto</TextContent>
          <TextContent color={Colors.darkGreen} size={16} weight={'bold'} style={{ textAlign: 'left', marginBottom: 8 }}>{id}</TextContent>
        </View>
        <TouchableOpacity onPress={() => purchase()}>
        <View style={{ width: ScreenWidth - 48, height: 60, borderWidth: 2, borderRadius: 10, borderColor: '#006DFD', justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
          <TextContent color={'#006DFD'} size={20} weight={'semiBold'}>Comprar</TextContent>
        </View>
        <View style={{ height: 12 }} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaCenteredContainer>
  );
};

export default Offer;
