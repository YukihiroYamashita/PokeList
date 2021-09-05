import React from 'react';

import search from '../../../assets/search.png';

import { Container, TextInput, Icon } from './styles';

interface IProps { 
  value: any;
  onChangeText: (text: string) => void;
  onEndEditing: () => void;
  placeholder: string;
}

const Input: React.FC<IProps> = ({ value, onChangeText, onEndEditing, placeholder }) => {
  return (
    <Container>
      <TextInput 
        value={value}
        onChangeText={onChangeText}
        onEndEditing={onEndEditing}
        placeholder={placeholder}
        placeholderTextColor='#FFF'
      />
      <Icon
        source={search}
      />

    </Container>
  );
}

export default Input;