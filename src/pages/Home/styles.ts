import styled from 'styled-components/native';
import { Image, Overlay, CheckBox, Button } from 'react-native-elements';

export const Container = styled.View`
  flex: 1;
  background-color: #FF3333;
`;

export const ListContainer = styled.View`
  flex: 1;
  background-color: #FFF;
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const FlatList = styled.FlatList`
`;

export const Modal = styled(Overlay)`
`;

export const Icon = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const OverlayContainer = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-family: Gilroy-Bold;
  font-size: 20px;
  margin-vertical: 20px;
`;

export const SubTitle = styled.Text`
  font-family: Gilroy-Medium;
  margin-vertical: 10px;
`;

export const Text = styled.Text`
  font-family: Gilroy-Medium;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Item = styled.Text`
  font-family: Gilroy-Light;

`;

export const Checkbox = styled(CheckBox)`

`;

export const CheckboxIcon = styled.Image`

`;

export const ModalButton = styled(Button)`
  position: absolute;
  bottom: 0px;
  background-color: #FF3333;
`;