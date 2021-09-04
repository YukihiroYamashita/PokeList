import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { store } from '../../redux';
import { api } from '../../util/api';
import { IApplicationState } from '../../redux';

import Header from '../../components/Header';

import Card from './Card';

import { Container, List } from './styles';

interface IResponse { 
  results: []
}

const Home: React.FC = () => {
  const [listOfPokemons, setListOfPokemons] = useState<any>([]);

  // const pokemonsFromRedux = useSelector(
  //   (state: IApplicationState) => state.Pokemons
  // );

  // useEffect(() => { 
  //   setListOfPokemons(pokemonsFromRedux.pokemon)
  // }, [pokemonsFromRedux]);

  useEffect(() => { 
    fetchApi();
  }, []);

  async function fetchApi() { 
    const { data } = await api.get<IResponse>('/pokemon');
    setListOfPokemons(data.results)
  }

  function renderListItem() { 
    return <Card/>
  }

  return (
    <>
    <Header />
    <Container>
      <List
        data={listOfPokemons}
        renderItem={renderListItem}
      />
    </Container>
    </>
  );
}

export default Home;