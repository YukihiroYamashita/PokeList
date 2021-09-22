import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

import { DetailProps } from '../../routes/screenProps';

import TopMenu from './TopMenu';
import Pokemon from './Pokemon';
import MiddleMenu from './MiddleMenu';
import About from './About';
import Stats from './Stats';
import Intro from './Intro';

import { Container, MenuContainer, TopContainer, Name, Item, Row } from './styles';
import { RootStackParamList } from '../../routes/RootStackParams';

const Detail: React.FC = () => {
  const [selected, setSelected] = useState<String>('About');

  // const { pokemonId, name, characteriscic, specie, hp, attack, defense } = useRoute<RouteProp<RootStackParamList, 'Detail'>>().params;

  // function renderContent() { 
  //   if(selected === 'About') { 
  //     return (
  //       <About 
  //         description={characteriscic}
  //         height={20}
  //         weight={30}
  //         specie={specie}
  //       />
  //     )
  //   } else if (selected === 'Stats') {
  //     return (
  //       <Stats 
  //         hp={hp}
  //         attack={attack}
  //         defense={defense}
  //       />
  //     )
  //   }
  // }

  return (
    <Container>
      <Intro/>
      {/* <TopContainer>
        <TopMenu />
        <MiddleMenu 
          name={name}
        />
        <Pokemon 
          id={pokemonId}
        />
        <Row>
          <Item 
            style={{ fontFamily: selected ==='About'? 'Gilroy-Bold' : 'Gilroy-Light'}}
            onPress={() => setSelected('About')}
          >About</Item>
          <Item
            style={{ fontFamily: selected ==='Stats'? 'Gilroy-Bold' : 'Gilroy-Light'}}
            onPress={() => setSelected('Stats')}
          >Stats</Item>
        </Row>
      </TopContainer>
      <MenuContainer>
        {renderContent()}
      </MenuContainer> */}
    </Container>
  );
}

export default Detail;