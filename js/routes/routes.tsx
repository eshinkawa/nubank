import React from 'react';
import { StyleSheet } from 'react-native'

import { createStackNavigator } from 'react-navigation-stack';

import SplashScreen from "../views/SplashScreen";
import UserAccount from "../views/UserAccount";
import Offer from "../views/Offer";

import { Colors, FontStyles } from '../styles/base';

const splashStack = createStackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      header: null
    }
  }
});

const userAccountStack = createStackNavigator({
  UserAccount: {
    screen: UserAccount,
    navigationOptions: {
      header: null
    }
  },  
  Offer: {
    screen: Offer,
    navigationOptions: ({navigation}) => ({
      headerStyle: styles.header,
      headerTintColor: Colors.white,
      headerBackTitle: 'Voltar',
      headerTitle: navigation.getParam('item').product.name || '',
      headerTitleStyle: styles.headerTitle,
    }),
  },
});

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.purpleNu,
    height: 60,
    elevation: 0,
    alignContent: 'center',
  },
  headerTitle: {
    fontFamily: FontStyles.regular,
    fontSize: 18
  }
});


const Routes = {
  splashStack,
  userAccountStack
};

export default Routes;
