import React from 'react';
import { View } from 'react-native';

import pokeball from '../../../assets/pokeball.png';

import { Container, PokeballBack, PokemonImage } from './styles';

interface IProps { 
  id: string;
}

const Pokemon: React.FC<IProps> = ({ id }) => {
  return (
    <>
      <Container>
        <PokeballBack
          source={pokeball}
        />
        <PokemonImage
          width={200}
          height={200}
          source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg` }}
        />
      </Container>
    </>
  );
}

export default Pokemon;