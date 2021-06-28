import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as ScreenOrientation from 'expo-screen-orientation';

import { Container } from './styles';

export default function Scanner(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);


  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    props.onCodeScanned(type, data)
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  const resetScanner = () => {
    setScanned(false);
    props.onCodeScanned('');
  };

  if (hasPermission === null) {
    return <Text>Aguardando permissão da câmera</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Container>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Repetir escaneamento'} onPress={() => resetScanner()} />}
    </Container>
  );
}