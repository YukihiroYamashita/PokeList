import styled from 'styled-components/native';

export const Container = styled.ScrollView`
`;

export const Icon = styled.Image`
  align-self: center;
`;

export const Description = styled.Text`
  font-family: Gilroy-Light;
  font-size: 18px;
  color: #333333;
  margin-vertical: 20px;
  text-align: center;
  width: 100%;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-vertical: 3px;
`;

export const Title = styled.Text`
  align-self: flex-start;
  font-family: Gilroy-Bold;
  font-size: 18px;
  color: #707070;
`;

export const Info = styled.Text`
  font-family: Gilroy-Light;
  font-size: 18px;
  color: #333333;
`;
