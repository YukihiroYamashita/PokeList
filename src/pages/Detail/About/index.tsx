import React from 'react';

import arrowDown from '../../../assets/arrowDown.png';

import { Container, Icon, Description, Row, Title, Info } from './styles';

interface IProps { 
  description: string;
  specie: string;
  weight: number;
  height: number;
}

const About: React.FC<IProps> = ({ description, specie, weight, height }) => {
  return (
    <Container>
      <Icon
        source={arrowDown}
      />
      <Description>{description}</Description>
      <Title style={{ marginBottom: 20 }}>Data</Title>
      <Row>
        <Title>Species</Title>
        <Info>{specie}</Info>
      </Row>
      <Row>
        <Title>Weight</Title>
        <Info>{weight}</Info>
      </Row>
      <Row>
        <Title>Height</Title>
        <Info>{height}</Info>
      </Row>
    </Container>
  );
}

export default About;