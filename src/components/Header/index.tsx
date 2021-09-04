import React, { useState } from 'react';

import { api } from '../../util/api';
import { store } from '../../redux';

import Input from './Input';
import { Container } from './styles';

interface IResponse { 
  results: []
}

const Header: React.FC = () => {
  const [value, setValue] = useState<String>('pikachu');

  async function fetchApi() { 
    const { data } = await api.get<IResponse>('/pokemon');

    store.dispatch({ type: 'pokelist/home/get-pokemon-list', payload: data.results })
  }

  return (
    <Container>
      <Input
        value={value}
        onChangeText={setValue}
        onEndEditing={fetchApi}
      />
    </Container>
  );
}

export default Header;