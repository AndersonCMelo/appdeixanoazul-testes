import React, { useEffect, useRef, useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import {SignatureView} from 'react-native-signature-capture-view';

import { Container, Title } from './styles';

function Assinatura() {
  const signatureRef = useRef(null);
  const [text,setText] = useState('')

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }, []);

  return  (
    <Container>
      {/* <Title>Olá</Title> */}
      <SafeAreaView style={{ flex: 1, width: '100%' }}>
        <SignatureView
          style={{ borderWidth: 2, height: '70%', width: '100%' }}
          ref={signatureRef}
          // onSave is automatically called whenever signature-pad onEnd is called and saveSignature is called
          onSave={(val) => {
            //  a base64 encoded image
            console.log('saved signature')
            console.log(val);
            setText(val)
           
          }}
          onClear={() => {
            console.log('cleared signature')
            setText('')
          }}
        />

        <View style={{flexDirection: 'row', justifyContent:'center', height: 50}}>
          <TouchableOpacity
            style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
            onPress={() => {
              signatureRef.current.clearSignature();
          }}>
            <Text>Clear</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={{ justifyContent:'center',alignItems:'center', flex:1}}
            onPress={() => {
              signatureRef.current.saveSignature();
            }}
          >
            <Text>Save</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={{flex:1,margin: 20}}>
          <Text numberOfLines={10} ellipsizeMode='tail'>{text}</Text>
        </ScrollView>
      </SafeAreaView>

    </Container>
  )
}

export default Assinatura;
