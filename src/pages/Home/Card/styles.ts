import styled from 'styled-components/native';
import SvgUri from "expo-svg-uri";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
`;

export const Column = styled.View`
`;

export const Name = styled.Text`
  font-family: Gilroy-Bold;
  font-size: 23px;
  color: #FFF;
`;

export const Id = styled.Text`
  font-family: Gilroy-Bold;
  font-size: 18px;
  color: #FFF;
`;

export const PokeImage = styled.Image`
  width: 150px;
  height: 150px;
`;