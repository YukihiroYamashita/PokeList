import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { api } from '../../util/api';
import { store } from '../../redux';

import favorites from '../../assets/favorites.png';
import filter from '../../assets/filter.png';
import logo from '../../assets/logo.png';

import Input from './Input';
import { Container, Row, Icon, Logo } from './styles';

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

interface IProps { 
  onFilterPress: () => void;
}

const Header: React.FC<IProps> = ({ onFilterPress }) => {
  const [value, setValue] = useState<String>('');

  const { navigate } = useNavigation();

  function selectRequestType() {
    if(value === '') {
      fetchListOfPokemons();
    } else { 
      fetchFindPokemon();
    }
  }

  async function fetchListOfPokemons() { 
    const { data } = await api.get<IResponse>('/pokemon/');

    store.dispatch({ type: 'pokelist/home/get-pokemon-list', payload: data.results });
  }

  async function fetchFindPokemon() { 
    const pokemonFinded = await api.get<IFindPokemonResponse>(`/pokemon/${value}`);

    let pokemonId = pokemonFinded.data.id;

    const pokemonFindedCharacteristc = await api.get<IFindPokemonCharacteristicsResponse>(`/characteristic/${pokemonId}`);

    let pokemonName = pokemonFinded.data.name;
    let pokemonSpecie = pokemonFinded?.data?.species.name;
    let pokemonCharacteristic = pokemonFindedCharacteristc?.data?.descriptions[2].description;

    let pokemonHp = pokemonFinded.data.stats[0].base_stat;
    let pokemonAttack = pokemonFinded.data.stats[1].base_stat;
    let pokemonDefense = pokemonFinded.data.stats[2].base_stat;

    navigate('Detail', { 
      pokemonId: pokemonId,
      name: pokemonName,
      characteriscic: pokemonCharacteristic,
      specie: pokemonSpecie,
      hp: pokemonHp,
      attack: pokemonAttack,
      defense: pokemonDefense
    });

    setValue('');
  }

  return (
    <Container>
      <Row>
        <Icon
          source={filter}
          onPress={onFilterPress}
          resizeMode='contain'
        />
        {/* <Icon
          source={favorites}
        /> */}
      </Row>
      <Row>
        <Logo
          source={logo}
        />
      </Row>
      <Row>
        <Input
          value={value}
          onChangeText={setValue}
          onEndEditing={selectRequestType}
          placeholder='Search for Pokémon'
        />
      </Row>
    </Container>
  );
}

export default Header;