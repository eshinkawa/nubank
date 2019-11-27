import React, { ReactElement } from 'react';
import {
    GridItem,
    ItemDesc,
    ItemInstallment,
    ItemPrice,
    ItemImage,
} from '../styles';

const Product = ({ picture, title, price: { current, installment } }): ReactElement => {
    return (
        <GridItem>
            <ItemImage resizeMode="cover" source={{ uri: picture }} />
            <ItemDesc numberOfLines={1}>{title || ''}</ItemDesc>
            <ItemPrice numberOfLines={1}>
                {current || ''}
            </ItemPrice>
            <ItemInstallment>{installment || ''}</ItemInstallment>
        </GridItem>)
};

export default Product;
