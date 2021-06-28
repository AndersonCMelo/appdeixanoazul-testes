import React, { useState, useEffect } from 'react';
import { Modal, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

import ImagePickerModule from '../../nativeModules/ImagePickerModule';

import logoImg from '../../assets/logo.png';

import Scanner from '../../components/Scanner';
// import QuaggaScanner from '../../components/QuaggaScanner';
import Assinatura from '../../components/Assinatura';

import {
  Container,
  Logo,
  Title,
  Button,
  ButtonCancel,
  ButtonsContainer,
  BoxModal,
  BoletoInfos,
  VerifyButton,
  SelectItem,
} from './styles';

function Funcionalidades() {
  const [modalExpoVisible, setModalExpoVisible] = useState(false);
  const [modalSignVisible, setModalSignVisible] = useState(false);

  const [taxaServicoModal, setTaxaServicoModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {

    // ScreenOrientation.unlockAsync();
  }, []);

  const [codeBarType, setCodeBarType] = useState('');
  const [codeBarData, setCodeBarData] = useState('');

  const onCodeScanned = (type, data) => {
    setCodeBarType(type);
    setCodeBarData(data);
    console.log(data);
  };

  const [linhaDigitavel, setLinhaDigitavel] = useState('');
  const [valorBoleto, setValorBoleto] = useState('');

  function converter() {
    const parte1 = codeBarData.substring(0, 3);
    const parte2 = codeBarData.substring(3, 4);
    const parte3 = codeBarData.substring(4, 19);
    const parte4 = codeBarData.substring(19, 24);
    const parte5 = codeBarData.substring(24, 30);
    const parte6 = codeBarData.substring(30, 44);

    const linhaDigitavel1 = `${parte1}${parte2}${parte4.substring(0, 1)}.${parte4.substring(1, 5)}`;
    const linhaDigitavel2 = `${parte5.substring(0, 5)}.${parte5.substring(5, 6)}${parte6.substring(0, 4)}`;
    const linhaDigitavel3 = `${parte6.substring(4, 9)}.${parte6.substring(9, 15)}`;
    const linhaDigitavel4 = `${parte3.substring(0, 1)}`;
    const linhaDigitavel5 = `${parte3.substring(1, 15)}`;

    // Verificador 1
    const numerosParte1 = linhaDigitavel1.replace('.', '');

    const Parte1soma0 = Number(numerosParte1[0]) * 2;
    const Parte1soma1 = Number(numerosParte1[1]) * 1;
    const Parte1soma2 = Number(numerosParte1[2]) * 2;
    const Parte1soma3 = Number(numerosParte1[3]) * 1;
    const Parte1soma4 = Number(numerosParte1[4]) * 2;
    const Parte1soma5 = Number(numerosParte1[5]) * 1;
    const Parte1soma6 = Number(numerosParte1[6]) * 2;
    const Parte1soma7 = Number(numerosParte1[7]) * 1;
    const Parte1soma8 = Number(numerosParte1[8]) * 2;

    const somaParte1 = (Parte1soma0 > 9 ? Parte1soma0[0] + Parte1soma0[1] : Parte1soma0) +
      (Parte1soma1 > 9 ? Number(Parte1soma1.toString()[0]) + Number(Parte1soma1.toString()[1]) : Parte1soma1) +
      (Parte1soma2 > 9 ? Number(Parte1soma2.toString()[0]) + Number(Parte1soma2.toString()[1]) : Parte1soma2) +
      (Parte1soma3 > 9 ? Number(Parte1soma3.toString()[0]) + Number(Parte1soma3.toString()[1]) : Parte1soma3) +
      (Parte1soma4 > 9 ? Number(Parte1soma4.toString()[0]) + Number(Parte1soma4.toString()[1]) : Parte1soma4) +
      (Parte1soma5 > 9 ? Number(Parte1soma5.toString()[0]) + Number(Parte1soma5.toString()[1]) : Parte1soma5) +
      (Parte1soma6 > 9 ? Number(Parte1soma6.toString()[0]) + Number(Parte1soma6.toString()[1]) : Parte1soma6) +
      (Parte1soma7 > 9 ? Number(Parte1soma7.toString()[0]) + Number(Parte1soma7.toString()[1]) : Parte1soma7) +
      (Parte1soma8 > 9 ? Number(Parte1soma8.toString()[0]) + Number(Parte1soma8.toString()[1]) : Parte1soma8);

    // Verificador 2
    const numerosParte2 = linhaDigitavel2.replace('.', '');

    const Parte2soma0 = Number(numerosParte2[0]) * 1;
    const Parte2soma1 = Number(numerosParte2[1]) * 2;
    const Parte2soma2 = Number(numerosParte2[2]) * 1;
    const Parte2soma3 = Number(numerosParte2[3]) * 2;
    const Parte2soma4 = Number(numerosParte2[4]) * 1;
    const Parte2soma5 = Number(numerosParte2[5]) * 2;
    const Parte2soma6 = Number(numerosParte2[6]) * 1;
    const Parte2soma7 = Number(numerosParte2[7]) * 2;
    const Parte2soma8 = Number(numerosParte2[8]) * 1;
    const Parte2soma9 = Number(numerosParte2[9]) * 2;

    const somaParte2 = (Parte2soma0 > 9 ? Parte2soma0[0] + Parte2soma0[1] : Parte2soma0) +
      (Parte2soma1 > 9 ? Number(Parte2soma1.toString()[0]) + Number(Parte2soma1.toString()[1]) : Parte2soma1) +
      (Parte2soma2 > 9 ? Number(Parte2soma2.toString()[0]) + Number(Parte2soma2.toString()[1]) : Parte2soma2) +
      (Parte2soma3 > 9 ? Number(Parte2soma3.toString()[0]) + Number(Parte2soma3.toString()[1]) : Parte2soma3) +
      (Parte2soma4 > 9 ? Number(Parte2soma4.toString()[0]) + Number(Parte2soma4.toString()[1]) : Parte2soma4) +
      (Parte2soma5 > 9 ? Number(Parte2soma5.toString()[0]) + Number(Parte2soma5.toString()[1]) : Parte2soma5) +
      (Parte2soma6 > 9 ? Number(Parte2soma6.toString()[0]) + Number(Parte2soma6.toString()[1]) : Parte2soma6) +
      (Parte2soma7 > 9 ? Number(Parte2soma7.toString()[0]) + Number(Parte2soma7.toString()[1]) : Parte2soma7) +
      (Parte2soma8 > 9 ? Number(Parte2soma8.toString()[0]) + Number(Parte2soma8.toString()[1]) : Parte2soma8) +
      (Parte2soma9 > 9 ? Number(Parte2soma9.toString()[0]) + Number(Parte2soma9.toString()[1]) : Parte2soma9);

    // Verificador 3
    const numerosParte3 = linhaDigitavel3.replace('.', '');

    const Parte3soma0 = Number(numerosParte3[0]) * 1;
    const Parte3soma1 = Number(numerosParte3[1]) * 2;
    const Parte3soma2 = Number(numerosParte3[2]) * 1;
    const Parte3soma3 = Number(numerosParte3[3]) * 2;
    const Parte3soma4 = Number(numerosParte3[4]) * 1;
    const Parte3soma5 = Number(numerosParte3[5]) * 2;
    const Parte3soma6 = Number(numerosParte3[6]) * 1;
    const Parte3soma7 = Number(numerosParte3[7]) * 2;
    const Parte3soma8 = Number(numerosParte3[8]) * 1;
    const Parte3soma9 = Number(numerosParte3[9]) * 2;

    const somaParte3 = (Parte3soma0 > 9 ? Parte3soma0[0] + Parte3soma0[1] : Parte3soma0) +
      (Parte3soma1 > 9 ? Number(Parte3soma1.toString()[0]) + Number(Parte3soma1.toString()[1]) : Parte3soma1) +
      (Parte3soma2 > 9 ? Number(Parte3soma2.toString()[0]) + Number(Parte3soma2.toString()[1]) : Parte3soma2) +
      (Parte3soma3 > 9 ? Number(Parte3soma3.toString()[0]) + Number(Parte3soma3.toString()[1]) : Parte3soma3) +
      (Parte3soma4 > 9 ? Number(Parte3soma4.toString()[0]) + Number(Parte3soma4.toString()[1]) : Parte3soma4) +
      (Parte3soma5 > 9 ? Number(Parte3soma5.toString()[0]) + Number(Parte3soma5.toString()[1]) : Parte3soma5) +
      (Parte3soma6 > 9 ? Number(Parte3soma6.toString()[0]) + Number(Parte3soma6.toString()[1]) : Parte3soma6) +
      (Parte3soma7 > 9 ? Number(Parte3soma7.toString()[0]) + Number(Parte3soma7.toString()[1]) : Parte3soma7) +
      (Parte3soma8 > 9 ? Number(Parte3soma8.toString()[0]) + Number(Parte3soma8.toString()[1]) : Parte3soma8) +
      (Parte3soma9 > 9 ? Number(Parte3soma9.toString()[0]) + Number(Parte3soma9.toString()[1]) : Parte3soma9);

    const dv1 = (Math.ceil(somaParte1 / 10) * 10) - somaParte1 % 10;
    const dv2 = (Math.ceil(somaParte2 / 10) * 10) - somaParte2 % 10;
    const dv3 = (Math.ceil(somaParte3 / 10) * 10) - somaParte3 % 10;

    setLinhaDigitavel(`${linhaDigitavel1}${dv1 > 9 ? dv1.toString()[1] : dv1} ${linhaDigitavel2}${dv2 > 9 ? dv2.toString()[1] : dv2} ${linhaDigitavel3}${dv3 > 9 ? dv3.toString()[1] : dv3} ${linhaDigitavel4} ${linhaDigitavel5}`);

    const valor = linhaDigitavel5.substring(4, 14);

    setValorBoleto(`R$ ${Number(valor.substring(0, 8))},${Number(valor.substring(8, 10))}`)
  };

  const imagePicker = async () => {
    const imagePickerText = await ImagePickerModule.pickImage();
    console.log(imagePickerText);
  };


  return (
    <Container>
      <Logo source={logoImg} />
      <Title>Funcionalidades</Title>
      <Title>{selectedValue}</Title>

      <Title style={{ margin: 20 }}>{codeBarData}</Title>

      <Title style={{ marginLeft: 20, marginRight: 20 }}>{linhaDigitavel}</Title>

      <Title style={{ marginTop: 20 }}>{valorBoleto}</Title>

      <Modal
        visible={modalExpoVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalExpoVisible(false)}
      >
        <BoxModal>
          <Scanner onCodeScanned={onCodeScanned} />
          {codeBarType !== '' && <BoletoInfos>
            <Title>Tipo: {codeBarType}</Title>
            <Title>Código: {codeBarData}</Title>
          </BoletoInfos>}
          <ButtonCancel onPress={() => {
            setModalExpoVisible(false);
            ScreenOrientation.unlockAsync();
          }}>
            <Title>Cancelar</Title>
          </ButtonCancel>
        </BoxModal>
      </Modal>

      <Modal
        visible={modalSignVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalSignVisible(false)}
      >
        <BoxModal>
          <Assinatura />
          {codeBarType !== '' && <BoletoInfos>
            <Title>Tipo: {codeBarType}</Title>
            <Title>Código: {codeBarData}</Title>
          </BoletoInfos>}
          <ButtonCancel onPress={() => {
            setModalSignVisible(false)
            ScreenOrientation.unlockAsync();
          }}>
            <Title>Cancelar</Title>
          </ButtonCancel>
        </BoxModal>
      </Modal>

      <ButtonsContainer>
        <Button onPress={() => setModalExpoVisible(true)}>
          <Title>Escanear com Expo BarCodeScanner</Title>
        </Button>

        <VerifyButton onPress={() => converter()}>
          <Title>Verificar</Title>
        </VerifyButton>

        <Button onPress={() => setModalSignVisible(true)}>
          <Title>Capturar assinatura</Title>
        </Button>

        <Button onPress={() => imagePicker()}>
          <Title>Testar ImagePicker</Title>
        </Button>

        <Button onPress={() => setTaxaServicoModal(!taxaServicoModal)}>
          <Title>Taxa de serviço</Title>
        </Button>
      </ButtonsContainer>

      <Modal
        animationType="slide"
        transparent={true}
        visible={taxaServicoModal}
        onRequestClose={() => setTaxaServicoModal(!taxaServicoModal)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.4)'
          }}
        >
          <View
            style={{
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              backgroundColor: '#fff',
              width: '100%',
              height: '40%',
              position: 'absolute',
              bottom: 0,
              paddingVertical: 25
            }}
          >
            <Text style={{ marginLeft: 25, fontWeight: 'bold', fontSize: 16 }}>Selecione a taxa de serviço</Text>

            <SelectItem onPress={() => {
              setSelectedValue("+R$ 0");
              setTaxaServicoModal(!taxaServicoModal);
            }}>
              <Text style={{ color: '#333' }}>+R$ 0</Text>
            </SelectItem>
            <SelectItem onPress={() => {
              setSelectedValue("+R$ 20");
              setTaxaServicoModal(!taxaServicoModal);
            }}>
              <Text style={{ color: '#333' }}>+R$ 20</Text>
            </SelectItem>
            <SelectItem onPress={() => {
              setSelectedValue("+R$ 35");
              setTaxaServicoModal(!taxaServicoModal);
            }}>
              <Text style={{ color: '#333' }}>+R$ 35</Text>
            </SelectItem>
            <SelectItem onPress={() => {
              setSelectedValue("+R$ 50");
              setTaxaServicoModal(!taxaServicoModal);
            }}>
              <Text style={{ color: '#333' }}>+R$ 50</Text>
            </SelectItem>
          </View>
        </View>
      </Modal>

    </Container>
  );
};

export default Funcionalidades;
