import { Text, View, StyleSheet, Button, ScrollView, TextInput, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [altura, setAltura] = useState('');
  const [massa, setMassa] = useState('');
  const [resultado, setResultado] = useState(null);

  function handleOnChangeAltura(texto: string) {
    setAltura(texto);
  }

  function handleOnChangeMassa(texto: string) {
    setMassa(texto);
  }

  function calcularIMC() {
    const alturaEmMetros = parseFloat(altura) / 100; // Converter altura de cm para m
    const imc = (parseFloat(massa) / (alturaEmMetros * alturaEmMetros)).toFixed(2);

    if (!isNaN(imc)) {
      setResultado(`Seu IMC é: ${imc}`);
    } else {
      setResultado('Por favor, insira valores válidos para altura e massa.');
    }
  }

  function resetarCalculo() {
    setAltura('');
    setMassa('');
    setResultado(null);
  }

  return (
    <View style={style.container}>
      <TextInput
        style={style.inputs}
        placeholder='Altura (cm)'
        onChangeText={handleOnChangeAltura}
        keyboardType='numeric'
        value={altura}
      />
      <TextInput
        style={style.inputs}
        placeholder='Massa (kg)'
        onChangeText={handleOnChangeMassa}
        keyboardType='numeric'
        value={massa}
      />
      <Button title='Calcular' onPress={calcularIMC} />
      {resultado && <Text style={{ textAlign: "center", margin: 10 }}>{resultado}</Text>}
      <Button title='Recalcular' onPress={resetarCalculo} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 10,
  },
  inputs: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#9ACD32",
  },
});
