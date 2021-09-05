import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
`;

export const TopContainer = styled.View`
  flex: 2;
  background-color: #333333;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const MenuContainer = styled.View`
  flex: 1;
  background-color: #FFF;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 10px;
`;

export const Name = styled.Text`
  font-family: Gilroy-Bold;
  font-size: 50px;
  color: #FFF;
`;

export const Item = styled.Text`
  font-family: Gilroy-Light;
  font-size: 20px;
  color: #FFF;
  flex: 1; 
  text-align: center;
`;