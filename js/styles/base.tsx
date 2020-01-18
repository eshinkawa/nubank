import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

interface IColors {
  [key: string]: string
}
interface IFont {
  [key: string]: string
}

interface ISize {
  [key: string]: number
}

interface ISpacing {
  [key: string]: string
}

export const Colors: IColors = {
  white: '#fff',
  green: '#19ab53',
  lightGreen: '#51c07d',
  darkGreen: '#009a46',
  headerGreen: '#00ac4f',
  grey: '#7f8788',
  lightGrey: '#ACA9A5',
  whiteGrey: '#eee',
  black: '#17171A',
  yellow: '#fcc729',
  orange: '#FDB933',
  pink: '#FE0061',
  greenElo: '#00A2A1',
  orangeElo: '#F96600',
  greyElo: '#A0A0A4',
  purpleNu: '#81259D',
  nuGray: '#E4E0EE'
};

export const FontStyles: IFont = {
  light: 'OpenSans-Light',
  regular: 'OpenSans-Regular',
  semiBold: 'OpenSans-SemiBold',
  bold: 'OpenSans-Bold',
  extraBold: 'OpenSans-ExtraBold',
};

export const FontSize: ISize = {
  XSmall: 12,
  Small: 14,
  Medium: 16,
  Large: 18,
  XLarge: 24,
};

export const Spacing: ISpacing = {
  XSmall: '4px',
  Small: '8px',
  Medium: '16px',
  Large: '24px',
  XLarge: '32px',
};

const CenteredContainerStr = `
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextContent = styled.Text<{ weight: string, size: string, color: string }>`
  font-family: ${props => FontStyles[props.weight]};
  font-size: ${props => props.size};
  color: ${props => props.color};
`;

export const VertSpacing = styled.View<{ size: string }>`
  height: ${props => props.size};
`;

export const Flex = styled.View<{ size: string }>`
  flex: ${props => props.size};
`;


export const CenteredContainer = styled.View<{ bgColor: string }>`
  ${CenteredContainerStr};
  background-color: ${props => props.bgColor || Colors.white};
`;

export const SafeAreaCenteredContainer = styled.SafeAreaView<{ bgColor: string }>`
  ${CenteredContainerStr};
  background-color: ${props => props.bgColor || Colors.whiteGrey};
`;

export const ScreenWidth = Dimensions.get('window').width;
export const ScreenHeight = Dimensions.get('window').height;
