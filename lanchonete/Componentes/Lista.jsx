import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'

export default function Lista(props) {
    function adicionarCarrinho(params) {
        alert('Adicionou ao carrinho')
    }

const {nome, valor, imagem} = props

  return (
    <View style={styles.container}>

      <Text style={styles.texto}></Text>

      <Text style={styles.texto}>{nome}</Text>
      <Text style={styles.texto}>Valor: R${valor},00</Text>

      <Image 
        source={{
            uri: imagem
        }}
        style={{
            height: 200,
            width: 200
        }}
      />
        <Button title='comprar' onPress={adicionarCarrinho}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c6e7cb',
        borderWidth: 10,
        padding: 1,
        paddingTop: 5,
        alignItems: 'center',
        flex: 1
    },
    texto: {
        fontSize: 20,
        fontWeight: 600
    }
})