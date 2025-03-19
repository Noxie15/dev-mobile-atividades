// imports dos componentes e libs
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

// função principal do componente
export default function App() {
// Lógica do meu componente
const nome = "Jaser Strach"

function alerta() {
  alert('Escrevi e fui trabalhar quem ta lendo quer me dar')
}


// retorno é um código JSX (Template) do que vai ser
// renderizado na tela
  return (

    <ScrollView>

    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{fontSize: 40 }}>Dessassombrado</Text>
      <Text style={{fontSize: 40 }}>Dessassombrado</Text>
      <Text style={{fontSize: 40 }}>Dessassombrado</Text>
      <Text style={{fontSize: 40 }}>Dessassombrado</Text>

      <Text style={styles.textoGrande}>{nome}</Text>

      <Button title='ENVIAR' onPress={alerta}></Button>

      <Image
      source={require('./Imagens/imagem_teste2.png')}
      style={{
        height: 300,
        width:  300,
      }}
      />
      <Image
      source={require('./Imagens/imagem_teste.png')}
      style={{
        height: 300,
        width:  300,
      }}
      />
      <Image
      source={require('./Imagens/imagem_teste3.png')}
      style={{
        height: 300,
        width:  300,
      }}
      />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  textoGrande: {
    fontSize: 50,
    fontWeight: 900,
    fontStyle: 'italic',
  },
});
