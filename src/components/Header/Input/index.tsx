import React from 'react';

import { Container, TextInput } from './styles';

interface IProps { 
  value: any;
  onChangeText: (text: string) => void;
  onEndEditing: () => void;
}

const Input: React.FC<IProps> = ({ value, onChangeText, onEndEditing }) => {
  return (
    <Container>
      <TextInput 
        value={value}
        onChangeText={onChangeText}
        onEndEditing={onEndEditing}
      />
    </Container>
  );
}

export default Input;