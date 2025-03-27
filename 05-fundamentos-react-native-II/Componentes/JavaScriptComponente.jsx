import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Perfil from './Perfil'

export default function JavaScriptComponente() {
// lógica do componente
    const nome = "Giovanne"
    const idade = 20

    function checarMaiorIdade() {
        console.log("Chamou a função checarMaiorIdade")
        if(idade>=18) {
            return "Maior de Idade"
        } else {
            return "Menor de Idade"
        }
    }

    function alerta() {
        console.log("Clicou no botão")
        alert('Clicou no botão!!!!!')
    }

// Retorno JSX
  return (
    <View style={styles.container}>

        <Text style={styles.texto}>JavaScript Componente</Text>
        <Text style={styles.texto}>NOME: {nome}</Text>
        <Text style={styles.texto}>IDADE: {idade}</Text>
        <Text style={styles.texto}>IDADE+40: {idade + 40}</Text>
        <Text style={styles.texto}>18+: {checarMaiorIdade()}</Text>


        <Button title='enviar' onPress={alerta} />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        borderWidth: 5,
        padding: 10
    },
    texto: {
        fontSize: 20,
        fontWeight: 600
    }
})