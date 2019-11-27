import React, {FunctionComponent, useContext} from 'react';
import {DataContext} from '../provider';
import {Colors} from '../styles/base';
import {StyleSheet} from 'react-native';

const Header: FunctionComponent = () => {
  const {headerInput, setHeaderInput, getList} = useContext(DataContext);

  return null;
};

const styles = StyleSheet.create({
  searchbar: {
    elevation: 0,
    backgroundColor: Colors.pink,
    top: 2,
    color: Colors.white,
  },
  input: {color: Colors.white, textAlign: 'left'},
});

export default Header;
