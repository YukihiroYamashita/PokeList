import React from 'react';
import FastImage from 'react-native-fast-image'
import { LinearGradient } from 'expo-linear-gradient';

import { Container, Column, Name, Id, PokeImage } from './styles';

interface IProps {
  name: string;
  id: string;
  uri: string;
  onPress: () => void;
}

const Card: React.FC<IProps> = ({ name, id, uri, onPress }) => {
  return (
    <LinearGradient
      colors={['#333333', 'transparent']}
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
      style={{ width: '100%', height: 100, marginVertical: 30, alignItems: 'center', borderRadius: 10 }}
    >
      <Container onPress={onPress}>
        <Column style={{ padding: 20, justifyContent:'space-around', width: '60%', height: 100 }}>
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
    </LinearGradient> 
  );
}

export default Card;