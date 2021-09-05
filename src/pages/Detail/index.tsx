import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';


import TopMenu from './TopMenu';
import Pokemon from './Pokemon';
import MiddleMenu from './MiddleMenu';
import About from './About';
import Stats from './Stats';
import Evolution from './Evolution';

import { Container, MenuContainer, TopContainer, Name, Item, Row } from './styles';

interface IParamProps { 
  params: {
    pokemonId: string;
  }
}

const Detail: React.FC = () => {
  const [selected, setSelected] = useState<String>('About');

  const { navigate } = useNavigation();
  const { pokemonId, name, characteriscic, specie, hp, attack, defense } = useRoute().params;

  function renderContent() { 
    if(selected === 'About') { 
      return (
        <About 
          description={characteriscic}
          height={20}
          weight={30}
          specie={specie}
        />
      )
    } else if (selected === 'Stats') {
      return (
        <Stats 
          hp={hp}
          attack={attack}
          defense={defense}
        />
      )
    }
  }

  return (
    <Container>
      <TopContainer>
        <TopMenu />
        <Pokemon 
          id={pokemonId}
        />
        <MiddleMenu 
          name={name}
        />
      </TopContainer>
      <Row>
        <Item 
          style={{ fontFamily: selected ==='About'? 'Gilroy-Bold' : 'Gilroy-Light'}}
          onPress={() => setSelected('About')}
        >About</Item>
        <Item
          style={{ fontFamily: selected ==='Stats'? 'Gilroy-Bold' : 'Gilroy-Light'}}
          onPress={() => setSelected('Stats')}
        >Stats</Item>
        {/* <Item 
          style={{ fontFamily: selected ==='Evolution'? 'Gilroy-Bold' : 'Gilroy-Light'}}
          onPress={() => setSelected('Evolution')}
        >Evolution</Item> */}
      </Row>
      <MenuContainer>
        {renderContent()}
      </MenuContainer>
    </Container>
  );
}

export default Detail;