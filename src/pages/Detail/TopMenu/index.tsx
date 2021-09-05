import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import back from '../../../assets/back.png';
import favorites from '../../../assets/favorites.png';

import { Container, Icon } from './styles';

const TopMenu: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <TouchableOpacity style={{ width: 20, height: 20 }} onPress={() => navigation.goBack()}>
        <Icon
          source={back}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          source={favorites}
        />
      </TouchableOpacity>
    </Container>
  );
}

export default TopMenu;