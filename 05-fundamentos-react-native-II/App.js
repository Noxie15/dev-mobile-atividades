import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './Componentes/PrimeiroComponente';
import JavaScriptComponente from './Componentes/JavaScriptComponente';
import Perfil from './Componentes/Perfil';
import ListaComponente from './Componentes/ListaComponente';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <ListaComponente />

      {/* <Perfil
      nome="Giovanne"
      idade={20}
      telefone={6199999999}
      email='zezinho.gameplay@gmail.com'
      />

      <Perfil
      nome="Henrique"
      idade={19}
      telefone={6199999997}
      email='viado.gameplay@gmail.com'
      />

      <Perfil
      nome="Matheus"
      idade={99}
      telefone={6969696969}
      email='pai_de_familia.gameplay@gmail.com'
      /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A3A3A3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});