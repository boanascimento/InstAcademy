
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { globalColors } from '../../styles';

export const subStyles = StyleSheet.create({
  cardShadow: {
    shadowColor: globalColors.transparentTwo,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});

export const Card = styled.View`
  background-color: ${globalColors.greenOne};
  border-radius: 20px;
  height: 280px;
  width: 200px;
  padding: 20px;
  margin: 15px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${globalColors.transparentTwo};
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: ${globalColors.transparentTwo};
  margin-top: 30px;
`;
