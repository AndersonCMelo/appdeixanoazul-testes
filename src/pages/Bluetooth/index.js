import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  // NativeModules
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';

import BluetoothModule from '../../nativeModules/BluetoothModule';
// import FindDevices from '../../nativeModules/FindDevices';
// import MyHeadsetLibModule from '../../nativeModules/MyHeadsetLibModule';
// import BleManager from 'react-native-ble-manager';

import logoImg from '../../assets/logo.png';

import { Container, Logo, Title, Button, ButtonsContainer } from './styles';
// import BleManager from 'react-native-ble-manager';

const Bluetooth = () => {
  // const navigation = useNavigation();

  const ligarBluetooth = () => {
    const ativar = BluetoothModule.turnOn();
    console.log(ativar)

    /* BleManager.start({ showAlert: false }).then(() => {
      // Success code
      console.log("Module initialized");
    })
    
    BleManager.enableBluetooth()
      .then(() => {
        // Success code
        console.log("O Bluetooth está ativado.");
      })
      .catch((error) => {
        // Failure code
        console.log("A ativação do Bluetooth deu erro.");
      }); */
    
  };

  const desligarBluetooth = () => {
    const desativar = BluetoothModule.turnOff();
    console.log(desativar)
  };

  const dispositivoDetectavel = () => {
    const detectavel = BluetoothModule.discoverable();
    console.log(detectavel)
  };

  const [dispositivosPareados, setDispositivosPareados] = useState([]);

  const encontrarDispositivosPareados = async () => {
    const devices = await BluetoothModule.getPairedDevices();
    console.log(devices);
    setDispositivosPareados(devices);
  };

  const removerLista = () => {
    if (dispositivosPareados.length > 0) {
      setDispositivosPareados([]);
    }
  };

  const descobrirDispositivos = async () => {
    // const scan = await FindDevices.scanDevices();
    // console.log(scan)

    /* BleManager.scan([], 5, true).then(response => {
      // Success code
      console.log("Scan started");
      console.log(response);
    });

    BleManager.getDiscoveredPeripherals([]).then((peripheralsArray) => {
      // Success code
      console.log("Discovered peripherals: " + peripheralsArray.length);
      console.log(peripheralsArray)
    }); */
  };

  return (
    <Container>
      {/* <Menu /> */}
      
      <Logo source={logoImg} />

      <Title>Bluetooth Page</Title>

      <ButtonsContainer>
        <Button onPress={() => ligarBluetooth()}>
          <Title>Ligar Bluetooth</Title>
        </Button>

        <Button onPress={() => desligarBluetooth()}>
          <Title>Desligar Bluetooth</Title>
        </Button>

        <Button onPress={() => dispositivoDetectavel()}>
          <Title>Tornar dispositivo detectável</Title>
        </Button>

        <Button onPress={() => encontrarDispositivosPareados()}>
          <Title>Listar dispositivos pareados</Title>
        </Button>

        <View>
          {dispositivosPareados.map(item => (
            <Title>{item}</Title>
          ))}
          {dispositivosPareados.length > 0 && <TouchableOpacity style={styles.buttonClear} onPress={() => removerLista()}>
            <Title>Limpar lista de dispositivos</Title>
          </TouchableOpacity>}
          
        </View>

        <Button onPress={() => descobrirDispositivos()}>
          <Title>Descobrir dispositivos</Title>
        </Button>

      </ButtonsContainer>
    </Container>
  )
};

export default Bluetooth;

const styles = StyleSheet.create({

  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  containerButtons: {
    marginTop: 70,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#0073FC',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 10
  },
  buttonClear: {
    backgroundColor: '#FF0000',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 10
  }
});