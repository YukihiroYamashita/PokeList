import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  background-color: brown;
`;

export const TextInput = styled.TextInput<TextInputProps>`
  height: 100%;
`;
