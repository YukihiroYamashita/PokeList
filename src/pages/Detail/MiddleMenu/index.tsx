import React from 'react';
import { View } from 'react-native';

import { Container, Name, Item, Row } from './styles';

interface IProps { 
  name: string;
}

const MiddleMenu: React.FC<IProps> = ({ name }) => {
  return (
    <Container>
      <Name>{name}</Name>
    </Container>
  );
}

export default MiddleMenu;