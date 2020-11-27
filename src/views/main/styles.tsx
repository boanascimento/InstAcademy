
import styled from 'styled-components/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { fonts } from '../../styles/fonts';

export const subStyles = StyleSheet.create({
  btnMenuStyle: {
    width: 39,
  },
  carousel: {
    padding: 10,
    justifyContent: 'flex-end',
  },
});

export const Header = styled.View`
  overflow: hidden;
`;

export const Title = styled.Text`
  font-size: 45px;
  color: #303030;
  padding: 20px;
  font-family: ${fonts.defaultFont};
`;

export const View = styled.View`
  padding: 10px;
  flex: 1;
`;

export const ScrollView = styled.ScrollView`
  background-color: ${Colors.lighter};
  height: 100%;
`;

export const BtnMenu = styled(Button).attrs({
  buttonStyle: subStyles.btnMenuStyle,
})``;

export const ViewCarousel = styled.View``;

