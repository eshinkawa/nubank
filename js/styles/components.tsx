import styled from 'styled-components/native';
import { Colors } from './base';
import { cpus } from 'os';

const CenteredContainerStr = `
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const CenteredContainer = styled.View<{bgColor: string}>`
    ${CenteredContainerStr};
    background-color: ${props => props.bgColor || '#D7D6D6'};
`;

export const SafeAreaCenteredContainer = styled.SafeAreaView<{bgColor: string}>`
    ${CenteredContainerStr};
    background-color: ${props => props.bgColor || '#F2F6FA'};
`;