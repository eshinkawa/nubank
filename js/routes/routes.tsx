import React from 'react';
import { StyleSheet } from 'react-native'

import { createStackNavigator } from 'react-navigation-stack';

import SplashScreen from "../views/SplashScreen";
import UserAccount from "../views/UserAccount";

import Header from '../components/header'
import { Colors } from '../styles/base';

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
});

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.pink,
    height: 60,
    elevation: 0,
    alignContent: 'center',
  }
});


const Routes = {
  splashStack,
  userAccountStack
};

export default Routes;
