import styled from "styled-components/native";
import { ScreenWidth, Colors, Spacing } from "../../styles/base";

export const SearchInfoBanner = styled.View`
  height: 48;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${ScreenWidth};
  padding-left: ${Spacing.Large};
  padding-right: ${Spacing.Large};
  border-bottom-width: 1;
  border-color: ${Colors.lightGrey};
`;

export const GridItem = styled.View`
  align-items: center;
  justify-content: flex-start;
  width: ${ScreenWidth / 2};
  height: 200;
`;

export const ItemImage = styled.Image`
  width: ${ScreenWidth / 2.2};
  height: 120;
`;

export const ItemDesc = styled.Text`
  color: #00A2A1;
  flex-wrap: wrap;
  width: ${ScreenWidth / 2.2};
  margin-top: 4;
  font-size: 16;
  font-weight: 600;
`;

export const ItemPrice = styled(ItemDesc)`
  font-weight: 500;
  margin-top: 2;
  color: #F96600;
`;

export const ItemInstallment = styled(ItemDesc)`
  font-weight: 500;
  margin-top: 2;
  color: #A0A0A4;
  font-size: 14;
  font-weight: bold;
`;


export const RightContent = styled.View`
  flex: 4;
`;

export const LeftContent = styled.View`
  flex: 1;
  flex-direction: row;
  top: 16;
`;

export const BannerText = styled.Text`
  color: ${Colors.lightGrey};
`;

export const BannerTextRight = styled(BannerText)`
  font-weight: bold;
`;