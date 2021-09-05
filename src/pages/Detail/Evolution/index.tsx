import React from 'react';

import arrowDown from '../../../assets/arrowDown.png';
import pikachu from '../../../assets/pikachu.png';
import pitch from '../../../assets/pitch.png';
import raichu from '../../../assets/raichu.png';

import { Container, Icon, PokemonImage, Row, Title, Column } from './styles';

const Evolution: React.FC = () => {
  return (
    <Container>
      <Icon
        source={arrowDown}
      />
      <Row>
        <Column>
          <PokemonImage
            source={pitch}
          />
          <Title>Pitch</Title>
        </Column>
        <Column>
          <PokemonImage
            source={pikachu}
          />
          <Title>Pikachu</Title>
        </Column>
        <Column>
          <PokemonImage
            source={raichu}
          />
          <Title>Raichu</Title>
        </Column>
      </Row>
    </Container>
  );
}

export default Evolution;