import React, { FunctionComponent } from 'react';
import { SafeAreaCenteredContainer } from '../../styles/components';
import { ScreenWidth } from '../../styles/base';
import { Text, View, Image, Alert } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { USER_DATA } from '../../schemas/userSchema';
import { currencyBRMask } from '../../utils/utils'
import { TouchableOpacity } from 'react-native-gesture-handler';

const UserAccount: FunctionComponent = () => {
  const { data } = useQuery(USER_DATA);
  console.log(data)
  return (
    <SafeAreaCenteredContainer>
      <Text style={{ color: 'rgb(202, 142, 226)', fontFamily: 'OpenSans-Regular', fontSize: 38, marginTop: 32 }}>Olá,
        <Text style={{ color: '#000', fontFamily: 'OpenSans-SemiBold', fontSize: 38 }}> {data.viewer.name || 'Jerry Smith'}!</Text>
      </Text>
      <View style={{ height: 20 }} />
      <Text style={{ color: 'gray', fontFamily: 'OpenSans-Regular', fontSize: 24 }}>Seu balanço é de:</Text>
      <View style={{ height: 10 }} />

      <Text style={{ color: '#000', fontFamily: 'OpenSans-Bold', fontSize: 42 }}>{currencyBRMask(data.viewer.balance) || 1000000}</Text>
        <View style={{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center'
  }}>
      {data.viewer.offers.map(item => (
        <TouchableOpacity onPress={() => Alert.alert(item.id)}>
        <View style={{ height: 240, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-around', width: ScreenWidth/2.2, margin: 6, backgroundColor: '#fff', borderRadius: 6 }}>
          <View style={{flex: 8, alignSelf: 'center', justifyContent: 'center'}}>
            <Image
              source={{ uri: item.product.image }}
              style={{width: 100, height: 100}}
            />
          </View>
          <View style={{flex: 2, padding: 24, alignSelf: 'center', justifyContent: 'center'}}>
            <Text style={{ color: '#5B5855', fontFamily: 'OpenSans-Bold', fontSize: 15, textAlign: 'center', flexWrap: 'wrap' }}>{item.product.name}</Text>
            <View style={{ height: 6 }} />
            <Text style={{ color: 'purple', fontFamily: 'OpenSans-Regular', fontSize: 14, textAlign: 'center' }}>{currencyBRMask(item.price)}</Text>
          </View>
        </View>
        </TouchableOpacity>
      ))}
      </View>
    </SafeAreaCenteredContainer>
  );
};

export default UserAccount;
