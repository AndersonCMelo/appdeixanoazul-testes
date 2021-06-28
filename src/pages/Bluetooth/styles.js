import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #10104F;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image``;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const ButtonsContainer = styled.View`
  margin-top: 70px;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  background-color: #0073FC;
  /* background-color: #FE9902; */
  padding: 8px 16px;
  border-radius: 8px;
  margin-bottom: 10px;
`;
