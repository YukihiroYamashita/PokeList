import React from 'react';
import { View } from 'react-native';

import { Container, Progress } from './styles';

interface IProps { 
  progress: number;
}

const Bar: React.FC<IProps> = ({ progress }) => {
  return (
    <Container>
      <Progress
        style={{ width: `${progress}%` }}
      />
    </Container>
  );
}

export default Bar;