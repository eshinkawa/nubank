import styled from "styled-components/native";
import { ScreenWidth, Colors, Spacing, FontStyles } from "../../styles/base";

export const Header = styled.View`
  background-color: #45244E;
  padding: ${Spacing.Large};
  width: ${ScreenWidth};
  justify-content: center;
  align-items: center;
  height: 200;
`;

export const RoundUserImage = styled.View`
    width: 70px;
    height: 70px;
    border-radius: 50;
    margin-bottom: ${Spacing.Small};
`;

export const TextContent = styled.Text`
  font-family: ${(props: string) => FontStyles[props.weight]};
  font-size: ${(props: string) => props.size};
  color: ${(props: string) => props.color};
`;

export const UserName = styled.Text`
  color: ${Colors.black};
  font-family: ${FontStyles.regular};
  font-size: 38;
`;

export const BalanceBox = styled.View`
  padding: 24px;
  align-self: center; 
  justify-content: center; 
  width: ${ScreenWidth * 0.8}; 
  height: 90; 
  background-color: #E06263; 
  border-radius: 10; 
  margin-top: -42;
`;

export const Offers = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`;

export const BoxOffer = styled.View`
  height: 240px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: ${ScreenWidth / 2.2};
  margin: 6px;
  background-color: #fff;
  border-radius: 8;
`;

export const UpperOfferBox = styled.View`
 flex: 6;
 align-self: center;
 justify-content: center;
`;


export const LowerOfferBox = styled.View`
 flex: 2;
 padding: ${Spacing.Small};
 align-self: center;
 justify-content: center;
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

