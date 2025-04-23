import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Perfil() {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>Adriana</Text>
      <Button title="Seguir" onPress={() => alert('Agora você está seguindo Adriana!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  // Defina os estilos necessários aqui
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});