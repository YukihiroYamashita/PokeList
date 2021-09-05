import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-vertical: 10px;
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
`;