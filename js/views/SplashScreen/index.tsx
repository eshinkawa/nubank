import React, { useEffect, FunctionComponent } from 'react';
import { Image } from 'react-native';
import { Colors, ScreenWidth, ScreenHeight } from '../../styles/base';
import { SafeAreaCenteredContainer } from '../../styles/components';
import { useQuery } from '@apollo/react-hooks';
import { USER_DATA } from '../../schemas/userSchema';

interface Props {
  navigation: any
}

const SplashScreen: FunctionComponent<Props> = ({ navigation }) => {
  const { data } = useQuery(USER_DATA);

  useEffect(() => {
    setTimeout(() => {
      conditionalRouting();
    }, 2000);
  });

  async function conditionalRouting() {
    navigation.navigate('UserAccount');
  };

  const imgSrc = require('../../../assets/images/logo.png');
  const imgWidth = Image.resolveAssetSource(imgSrc).width;
  const imgHeight = Image.resolveAssetSource(imgSrc).height;
  return (
    <SafeAreaCenteredContainer bgColor={Colors.purpleNu}>
      <Image
        source={require('../../../assets/images/logo.png')}
        resizeMode="contain"
        style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: ScreenWidth, height: ScreenWidth / (imgWidth / imgHeight) }}
      />
    </SafeAreaCenteredContainer>
  );
};

export default SplashScreen;
