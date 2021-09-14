import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, ScrollView } from 'react-native';

import close from '../../assets/close.png';
import checked from '../../assets/checked.png';
import unchecked from '../../assets/unchecked.png';

import Header from '../../components/Header';

import { MainStack } from '../../routes';
import { api } from '../../util/api';
import { IApplicationState } from '../../redux';

import Card from './Card';
import Error from './Error';

import { Container, FlatList, ListContainer, Modal, Icon, Title, SubTitle, Row, Item, Checkbox, Text, CheckboxIcon, ModalButton, OverlayContainer } from './styles';

interface IResponse { 
  results: []
}

interface IFindPokemonResponse { 
  name: string;
  id: string;
  weight: string;
  height: string;
  stats: [
    {
      stat: { name: string },
      base_stat: string;
    }
  ],
  species: { name: string }
}

interface IFindPokemonCharacteristicsResponse { 
  descriptions: [
    {
      description: string
    }
  ]
}

const Home: React.FC = () => {
  const [listOfPokemons, setListOfPokemons] = useState<any>([]);
  const [initialListCount, setInitialListCount] = useState<number>(0);
  const [finalListCount, setFinalListCount] = useState<number>(10);

  const [orderBy, setOrderBy] = useState<string>('');
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
  const [errorIsVisible, setErrorIsVisible] = useState<boolean>(false);

  const { navigate } = useNavigation<MainStack>();

  const pokemonsFromRedux = useSelector(
    (state: IApplicationState) => state.Pokemons
  );

  useEffect(() => { 
    setListOfPokemons(pokemonsFromRedux.pokemon.slice(initialListCount, finalListCount));
  }, [pokemonsFromRedux]);

  async function fetchPokemonData(id : string) {
    const pokemonFinded = await api.get<IFindPokemonResponse>(`/pokemon/${id}`);
    const pokemonFindedCharacteristc = await api.get<IFindPokemonCharacteristicsResponse>(`/characteristic/${id}`);
    
    let pokemonName = pokemonFinded.data.name;
    let pokemonSpecie = pokemonFinded?.data?.species.name;
    let pokemonCharacteristic = pokemonFindedCharacteristc.data.descriptions[2].description;
    let pokemonHp = Number(pokemonFinded.data.stats[0].base_stat);
    let pokemonAttack = pokemonFinded.data.stats[1].base_stat;
    let pokemonDefense = pokemonFinded.data.stats[2].base_stat;

    navigate('Detail', { 
      pokemonId: id,
      name: pokemonName,
      characteriscic: pokemonCharacteristic,
      specie: pokemonSpecie,
      hp: pokemonHp,
      attack: pokemonAttack,
      defense: pokemonDefense
    });
  }

  function renderListItem({ item }) { 
    let pokemonId = String(item.url).split('/pokemon/')[1].replace('/', '');

    return ( 
      <Card
        name={item.name}
        id={pokemonId}
        onPress={() => fetchPokemonData(pokemonId)}
        uri={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
      />
    )
  }

  function handleEndReached() { 
    setListOfPokemons([...listOfPokemons, ...pokemonsFromRedux.pokemon.slice(finalListCount, finalListCount + 10)]);

    setInitialListCount(finalListCount + 10);
    setFinalListCount(finalListCount + 20);
  }

  function orderByNameAsc() { 
    let pokemonOrdened:{ name: string, url: string }[] = pokemonsFromRedux.pokemon.sort((a, b)  => {
      if(a.name > b.name) { 
        return 1;
      };

      if (a.name < b.name) {
        return -1;
      };

      return 0
    });

    setListOfPokemons(pokemonOrdened.slice(initialListCount, finalListCount));
    setModalIsVisible(false);
  }

  function orderByNameDesc() { 
    let pokemonOrdened:{ name: string, url: string }[] = pokemonsFromRedux.pokemon.sort((a, b)  => {
      if(a.name < b.name) { 
        return 1;
      };

      if (a.name > b.name) {
        return -1;
      };

      return 0
    });

    setListOfPokemons(pokemonOrdened.slice(initialListCount, finalListCount));
    setModalIsVisible(false);
  }

  function orderByNumberAsc() { 
    let pokemonOrdened:{ name: string, url: string }[] = pokemonsFromRedux.pokemon.sort((a, b)  => {

      let pokemonFirstId:number = Number(String(a.url).split('/pokemon/')[1].replace('/', ''));
      let pokemonSecondId:number = Number(String(b.url).split('/pokemon/')[1].replace('/', ''));

      return pokemonFirstId - pokemonSecondId
    });

    setListOfPokemons(pokemonOrdened.slice(initialListCount, finalListCount));
    setModalIsVisible(false);
  }

  function orderByNumberDesc() { 
    let pokemonOrdened:{ name: string, url: string }[] = pokemonsFromRedux.pokemon.sort((a, b)  => {

      let pokemonFirstId:number = Number(String(a.url).split('/pokemon/')[1].replace('/', ''));
      let pokemonSecondId:number = Number(String(b.url).split('/pokemon/')[1].replace('/', ''));

      return pokemonSecondId - pokemonFirstId;
    });

    setListOfPokemons(pokemonOrdened.slice(initialListCount, finalListCount));
    setModalIsVisible(false);
  }

  function handleFilterPress() { 
    setInitialListCount(0);
    setFinalListCount(10);

    switch(orderBy) { 
      case 'nameAsc':
        orderByNameAsc();
        break;
      case 'nameDesc':
        orderByNameDesc();
        break;
      case 'numberAsc': 
        orderByNumberAsc();
        break;
      case 'numberDesc': 
        orderByNumberDesc();
        break;
      default:
        break;
    }
  }

  function handleClearPress() { 
    setOrderBy('');
    orderByNumberAsc();
    setModalIsVisible(false);
  }

  function renderListFooterComponent() { 
    return (
      <ActivityIndicator
        color='#FF3333'
      />
    )
  }

  function renderFilterModal() { 
    return (
      <Modal
        isVisible={modalIsVisible}
        onBackdropPress={() => setModalIsVisible(false)}
        overlayStyle={{ width: '100%', height: '80%', position:'absolute', bottom: 0, padding: 40 }}
        animationType='slide'
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <OverlayContainer>
            <Icon
              source={close}
              onPress={() => setModalIsVisible(false)}
            />
            <Title>Filter</Title>
            <Text>Some filters that will help you in your search</Text>
            <SubTitle>Ordenation</SubTitle>
            <Row>
              <Item>A-Z</Item>
              <Checkbox
                checked={orderBy === 'nameAsc'}
                uncheckedIcon={<CheckboxIcon source={unchecked}/>}
                checkedIcon={<CheckboxIcon source={checked}/>}
                onPress={() => setOrderBy('nameAsc')}
                containerStyle={{ left: 10, padding: 0 }}
              />
            </Row>
            <Row>
              <Item>Z-A</Item>
              <Checkbox
                checked={orderBy === 'nameDesc'}
                uncheckedIcon={<CheckboxIcon source={unchecked}/>}
                checkedIcon={<CheckboxIcon source={checked}/>}
                onPress={() => setOrderBy('nameDesc')}
                containerStyle={{ left: 10, padding: 0 }}
              />
            </Row>
            <Row>
              <Item>Number Asc</Item>
              <Checkbox
                checked={orderBy === 'numberAsc'}
                uncheckedIcon={<CheckboxIcon source={unchecked}/>}
                checkedIcon={<CheckboxIcon source={checked}/>}
                onPress={() => setOrderBy('numberAsc')}
                containerStyle={{ left: 10, padding: 0 }}
              />
            </Row>
            <Row>
              <Item>Number Desc</Item>
              <Checkbox
                checked={orderBy === 'numberDesc'}
                uncheckedIcon={<CheckboxIcon source={unchecked}/>}
                checkedIcon={<CheckboxIcon source={checked}/>}
                onPress={() => setOrderBy('numberDesc')}
                containerStyle={{ left: 10, padding: 0 }}
              />
            </Row>
          </OverlayContainer>
          <ModalButton
            title='APPLY'
            onPress={handleFilterPress}
            titleStyle={{ fontFamily: 'Gilroy-Bold' }}
            buttonStyle={{  backgroundColor: '#FF3333', marginTop: 20 }}
          />
          <ModalButton
            title='CLEAR'
            onPress={handleClearPress}
            titleStyle={{ fontFamily: 'Gilroy-Bold', color: '#FF3333' }}
            buttonStyle={{  borderColor: '#FF3333', marginVertical: 20, backgroundColor: '#FFF', borderWidth: 1 }}
          />
        </ScrollView>
      </Modal>
    )
  }

  return (
    <Container>
      <Error
        isVisible={errorIsVisible}
        onPress={() => setErrorIsVisible(false)}
      />
      {renderFilterModal()}
      <Header 
        onFilterPress={() => setModalIsVisible(true)}
        onSearchError={() => setErrorIsVisible(true)}
      />
      <ListContainer>
        <FlatList
          data={listOfPokemons}
          renderItem={renderListItem}
          keyExtractor={item => String(item.name)}
          showsVerticalScrollIndicator={false}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.5}
          initialNumToRender={10}
          ListFooterComponent={renderListFooterComponent}
        />
      </ListContainer>
    </Container>
  );
}

export default Home;