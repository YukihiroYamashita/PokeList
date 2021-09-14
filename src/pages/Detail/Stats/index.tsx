import React from 'react';
import arrowDown from '../../../assets/arrowDown.png';

import Bar from './Bar';

import { Container, Icon, Row, Title } from './styles';

interface IProps { 
  hp: number;
  attack: number;
  defense: number;
}

const Stats: React.FC<IProps> = ({ hp, attack, defense }) => {
  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 20, alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}
    >
      {/* <Icon
        source={arrowDown}
      /> */}
      <Title>Base Stats</Title>
      <Row>
        <Title>HP</Title>
        <Bar
          progress={hp}
        />
      </Row>
      <Row>
        <Title>Attack</Title>
        <Bar
          progress={attack}
        />
      </Row>
      <Row>
        <Title>Defense</Title>
        <Bar
          progress={defense}
        />
      </Row>
    </Container>
  );
}

export default Stats;