import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function JavaScriptComponente() {
    const nome = "Giovanne"
    const idade = 20
  function exibirNome() {
    return nome
  }
  function checarMaiorIdade() {
    if (idade >= 18){
        return "Maior de Idade"
    } else{
        return "Menor de Idade"
    }
  }
  return (
    <View>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Nome: {exibirNome()}</Text>
      <Text>Resultado: {25+31}</Text>
      <Text>Idade: {idade + 20}</Text>
      <Text>Check 18+ : {checarMaiorIdade()}</Text>
      <Text>Check 18+ : {idade >= 18 ? "Maior de Idade" : "Menor de Idade"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({})