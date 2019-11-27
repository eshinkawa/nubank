import React, { ReactElement } from 'react';
import {
    View,
    ActivityIndicator,
} from 'react-native';

const Product = (): ReactElement => {
    return (
        <View style={{ margin: 24 }}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>)
};

export default Product;
