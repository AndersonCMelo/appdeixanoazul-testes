import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';

import { Container } from './styles';

function Camera() {

  /* function onBarCodeScanned(barcodes) {
    console.log(barcodes);
    alert(`Código de barras detectado: ${barcodes}`)

    return;
  } */

  return (
    <Container>
      <RNCamera
          style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', }}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          // onBarCodeRead={(barcodes) => onBarCodeScanned(barcodes)}
          onGoogleVisionBarcodesDetected={(barcodes) => onBarCodeScanned(barcodes)}
        />
          {/* {({ camera, status, recordAudioPermissionStatus }) => {

            return (
              <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                  <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera> */}
    </Container>
  );
};

export default Camera;
