import styled from 'styled-components/native';
import { Image, Overlay, CheckBox, Button } from 'react-native-elements';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled(Overlay)`
`;

export const Icon = styled(Image)`
  align-self: flex-end;
  width: 20px;
  height: 20px;
`;

export const Title = styled.Text`
  font-family: Gilroy-Bold;
  font-size: 20px;
  color: #FFF;
`;

export const RocketImage = styled.Image`
  margin-vertical: 20px;
`;

export const Description = styled.Text`
  font-family: Gilroy-Light;
  color: #FFF;
`;

export const BackButton = styled(Button)`
  font-family: Gilroy-Light;
  color: #FFF;
`;