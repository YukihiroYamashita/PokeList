import styled from 'styled-components/native';
import { Image } from 'react-native-elements';

export const Container = styled.View`
  padding: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-vertical: 5px;
`;

export const Logo = styled.Image`
`;

export const Icon = styled(Image)`
  width: 30px;
  height: 30px;
`;
