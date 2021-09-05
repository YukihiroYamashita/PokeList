import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #FEE652;
`;

export const TopContainer = styled.View`
  flex: 1.8;
`;

export const MenuContainer = styled.View`
  flex: 1;
  background-color: #FFF;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
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
  color: #333333;
  flex: 1; 
  text-align: center;
`;