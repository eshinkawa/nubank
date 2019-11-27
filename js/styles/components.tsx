import styled from 'styled-components/native';
import { Colors } from './base';

const CenteredContainerStr = `
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const CenteredContainer = styled.View`
    ${CenteredContainerStr};
    background-color: ${(props: string) => props.bgColor || Colors.white};
`;

export const SafeAreaCenteredContainer = styled.SafeAreaView`
    ${CenteredContainerStr};
    background-color: ${(props: string) => props.bgColor || Colors.whiteGrey};
`;