import { TextInputProps, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 20px;
  width: 100%;
  height: 45px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-radius: 100px;
  border-color: #FFF;
`;

export const TextInput = styled.TextInput<TextInputProps>`
  flex: 1;
  height: 100%;
  color: #FFF;
  font-family: Gilroy-Light;
  opacity: 0.92;
`;

export const Icon = styled.Image`
`;
