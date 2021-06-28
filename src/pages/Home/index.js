import React, { useState } from 'react';
import { View, Modal, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

import CustomModule from '../../nativeModules/CustomModule';

import logoImg from '../../assets/logo.png';

import { Container, Logo, Title, Button, ButtonsContainer, SelectItem, ButtonNavi } from './styles';

const Home = () => {
  const navigation = useNavigation();

  const [selectedValue2, setSelectedValue2] = useState("");

  const [devideId, setDevideId] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  const onPressDevideId = async () => {
    const id = await CustomModule.getDevideId();
    console.log(id);

    if (devideId === "") {
      setDevideId(id);
    } else {
      setDevideId('');
    }
  };

  const onPressToast = () => {
    CustomModule.showToast('Hello, Deixa no Azul');
    console.log('Chamou o Toast')
  };

  return (
    <Container>

      <Logo source={logoImg} />

      <Title>Home Page</Title>
      <Title>{devideId}</Title>

      <ButtonsContainer>
        <Button onPress={() => onPressDevideId()}>
          <Title>Mostrar Devide Id</Title>
        </Button>

        <Button onPress={() => onPressToast()}>
          <Title>Mostrar Toast</Title>
        </Button>

      </ButtonsContainer>

      <ButtonsContainer>
        <ButtonNavi onPress={() => navigation.navigate("SignIn")}>
          <Title>SignIn</Title>
        </ButtonNavi>

        <ButtonNavi onPress={() => navigation.navigate("Bluetooth")}>
          <Title>Bluetooth</Title>
        </ButtonNavi>

        <ButtonNavi onPress={() => navigation.navigate("Funcionalidades")}>
          <Title>Funcionalidades</Title>
        </ButtonNavi>
      </ButtonsContainer>

      {/* <Picker
        selectedValue={selectedValue2}
        style={{ height: 50, width: '50%', color: '#fff', borderColor: '#fff', borderWidth: 2 }}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue2(itemValue)
        }}
      >
        <Picker.Item style={{ color: '#333' }} label="Selecione" value="" />
        <Picker.Item style={{ color: '#333' }} label="+R$ 0" value="0" />
        <Picker.Item style={{ color: '#333' }} label="+R$ 20" value="20" />
        <Picker.Item style={{ color: '#333' }} label="+R$ 35" value="35" />
        <Picker.Item style={{ color: '#333' }} label="+R$ 50" value="50" />
      </Picker> */}
    </Container>
  )
};

export default Home;
