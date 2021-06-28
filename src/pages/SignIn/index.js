import React from 'react';
// import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';

import { Container, Title, Logo, ButtonsContainer, Button } from './styles';

function SignIn() {
  const navigation = useNavigation();

  return (
    <Container>
      <Logo source={logoImg} />

      <Title>SignIn</Title>

      <ButtonsContainer>
        <Button onPress={() => navigation.navigate("Home")}>
          <Title>Home</Title>
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default SignIn;
