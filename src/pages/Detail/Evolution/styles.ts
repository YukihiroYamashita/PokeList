import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
`;

export const Column = styled.View`
  flex: 1; 
  align-items: center;
  align-content: center;
  justify-content: flex-end;
`;

export const Icon = styled.Image`
  align-self: center;
  margin-top: 20px;
`;

export const Description = styled.Text`
  font-family: Gilroy-Light;
  font-size: 18px;
  color: #333333;
  margin-vertical: 20px;
  text-align: left;
  width: 100%;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-vertical: 3px;
`;

export const Title = styled.Text`
  font-family: Gilroy-Bold;
  font-size: 18px;
  color: #707070;
`;

export const Info = styled.Text`
  font-family: Gilroy-Light;
  font-size: 18px;
  color: #333333;
`;

export const PokemonImage = styled.Image`
`;