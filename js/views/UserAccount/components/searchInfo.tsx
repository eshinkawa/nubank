import React, { FunctionComponent, useContext } from 'react';
import { SearchInfoBanner } from '../styles'
import { Colors } from '../../../styles/base';
import { DataContext } from '../../../provider';
import {RightContent, BannerText, BannerTextRight, LeftContent} from '../styles'

const SearchInfo: FunctionComponent = () => {
  const { products } = useContext(DataContext);
  return (
    <SearchInfoBanner>
      <RightContent>
        <BannerText>{products && products.length} produtos encontrados</BannerText>
      </RightContent>
      <LeftContent>
        <BannerTextRight>Filtrar</BannerTextRight>
      </LeftContent>
    </SearchInfoBanner>
  );
};

export default SearchInfo;
