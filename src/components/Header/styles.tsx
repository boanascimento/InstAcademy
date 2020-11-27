import styled from 'styled-components/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const Header = styled.View`
  overflow: hidden;
  position: absolute;
  padding: 10px 10px 1px;
  width: 105%;
  z-index: 3;
  background-color: ${Colors.lighter};
`;
