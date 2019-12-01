import styled from "styled-components/native";
import { ScreenWidth, Colors, Spacing, FontStyles, TextContent } from "../../styles/base";

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

export const OfferTitle = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

export const OfferNameText = styled(TextContent)`
  text-align: left;
  margin-bottom: 8px;
  flex: 1;
`;


export const CodeText = styled(TextContent)`
  margin-bottom: 8px;
`;


export const OfferPriceText = styled(TextContent)`
  text-align: right;
  align-self: center;
  margin-bottom: 8px;
  flex: 1;
`;

export const DescText = styled(TextContent)`
  margin-bottom: 8px;
`;

export const ModalHeader = styled.View`
  flex: 7;
  margin-left: 16;
`;


export const ImageOfferSection = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: ${ScreenWidth};
`;

export const ImageOfferDesc = styled.View`
  flex: 1;
  padding: ${Spacing.Large};
`;


export const PurchaseButton = styled.View`
  width: ${ScreenWidth - 48};
  height: 60;
  border-width: 2;
  border-radius: 10;
  border-color: #006DFD;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const ConfirmPurchaseButton = styled(PurchaseButton)`
  background-color: #006DFD;
`;

export const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.85);
`;

export const ModalContent = styled.View`
  flex: 1;
  background-color: #E8F1F3;
  padding: ${Spacing.Large};
  justify-content: center;
  align-self: center;
  border-radius: 6;
  width: ${ScreenWidth - 24};
`;

export const ModalBottomLine = styled.View`
  border-width: 0.5;
  border-color: #9DA4AF;
  margin-top: 4px;
`;

export const ModalFlexImageText = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
