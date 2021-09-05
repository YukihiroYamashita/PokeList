import styled from 'styled-components/native';
import SvgUri from "expo-svg-uri";

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PokeballBack = styled.Image`
  right: -70px;
  width: 170px;
  height: 170px;
`;

export const PokemonImage = styled(SvgUri)`
  right: 40px; 
`;
