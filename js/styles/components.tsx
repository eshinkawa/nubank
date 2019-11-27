import styled from 'styled-components/native';
import { Colors } from './base';
import { cpus } from 'os';

const CenteredContainerStr = `
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const CenteredContainer = styled.View`
    ${CenteredContainerStr};
    background-color: ${(props: string) => props.bgColor || '#D7D6D6'};
`;

export const SafeAreaCenteredContainer = styled.SafeAreaView`
    ${CenteredContainerStr};
    background-color: ${(props: string) => props.bgColor || '#F2F6FA'};
`;