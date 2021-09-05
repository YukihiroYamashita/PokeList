import styled from 'styled-components/native';
import SvgUri from "expo-svg-uri";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: blue;
  margin-vertical: 30px;
  border-radius: 10px;
`;

export const Column = styled.View`
`;

export const Name = styled.Text`
  font-family: Gilroy-Bold;
  font-size: 30px;
  color: #FFF;
`;

export const Id = styled.Text`
  font-family: Gilroy-Bold;
  font-size: 20px;
  color: #FFF;
`;

export const PokeImage = styled.Image`
  width: 150px;
  height: 150px;
`;