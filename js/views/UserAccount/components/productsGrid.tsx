import React, { ReactElement, useContext } from 'react';
import {
  FlatList,
  TouchableHighlight,
} from 'react-native';
import { DataContext } from '../../../provider';
import { Colors } from '../../../styles/base';
import { useNavigation } from 'react-navigation-hooks';

import { Product, Spinner } from './'

const ProductsGrid = (): ReactElement => {
  const { navigate } = useNavigation();
  const { products, isLoading } = useContext(DataContext);
  return (
    <>
      {isLoading && <Spinner />}
      <FlatList
        numColumns={2}
        data={products}
        style={{ flex: 1, paddingTop: 8 }}
        renderItem={({ item }) => (
          <TouchableHighlight
            underlayColor={Colors.white}
            activeOpacity={0.2}
            onPress={() =>
              navigate('ProductDetails', { itemUrl: item._link })
            }>
            <Product {...item} />
          </TouchableHighlight>
        )}
      />
    </>
  );
};

export default ProductsGrid;
