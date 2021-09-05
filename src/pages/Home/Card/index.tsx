import React from 'react';
import FastImage from 'react-native-fast-image'

import { Container, Column, Name, Id, PokeImage } from './styles';

interface IProps {
  name: string;
  id: string;
  uri: string;
  onPress: () => void;
}

const Card: React.FC<IProps> = ({ name, id, uri, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Column style={{ padding: 20, justifyContent:'space-around', width: '60%' }}>
        <Name numberOfLines={1}>{name}</Name>
        <Id>#{id}</Id>
      </Column>
      <Column>
        <PokeImage
          source={{ uri }}
          resizeMode='contain'
        />
      </Column>
    </Container>
  );
}

export default Card;