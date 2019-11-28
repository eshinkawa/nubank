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
  shadow-color: #ccc;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.5;
  shadow-radius: 1px;
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