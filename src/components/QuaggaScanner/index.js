import React, { useEffect } from 'react';
import { Text } from 'react-native';
import Quagga from 'quagga';

import { Container } from './styles';

export default function QuaggaScanner(props) {

  useEffect(() => {

    Quagga.init(
      {
        inputStream : {
          name : "Live",
          type : "LiveStream",
          target: document.querySelector('#video'),
          constraints: {
            facingMode: 'environment',
          }
        },
        numOfWordkers: 1,
        locate: true,
        decoder : {
          readers : [
            "code_128_reader"
          ]
        }
      },
      err => {
        if (err) {
          alert("Erro ao abrir câmera");
          return
        }
        alert("Passou");
        Quagga.start();
      }
    )

    /* if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      
    } */
  }, []);

  return (
    <Container id="video">
      <Text>Quagga Scanner</Text>
    </Container>
  )
};
