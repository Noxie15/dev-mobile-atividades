import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Button } from "react-native";
import Lista from "./Componentes/Lista";

export default function App() {
  const listaLanchonete = [
    {
      nome: "Enroladinho",
      valor: 4,
      imagem:
        "https://i.pinimg.com/236x/9a/e5/e0/9ae5e0c4c6cc31faac49283836601c0e.jpg",
    },
    {
      nome: "Sanduiche Natural",
      valor: 13,
      imagem:
        "https://i.pinimg.com/474x/fb/e9/9e/fbe99e0b35f932c31719b159ead1b5d5.jpg",
    },
    {
      nome: "Mousse de Maracúja",
      valor: 15,
      imagem:
        "https://i.pinimg.com/236x/52/19/e8/5219e85466e4b58dfe3e9afa89af31e9.jpg",
    },
    {
      nome: "Coca Lata",
      valor: 7,
      imagem:
        "https://i.pinimg.com/236x/8a/10/00/8a100000f40a519cd068c7549f792f54.jpg",
    },
    {
      nome: "Almoço",
      valor: 20,
      imagem:
        "https://i.pinimg.com/236x/7e/e8/2b/7ee82b761dd674e6fb6f01a0611ef7cc.jpg",
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />

        {listaLanchonete.map((lista) => {
          return (
            <Lista
              nome={lista.nome}
              valor={lista.valor}
              imagem={lista.imagem}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A3A3A3",
  },
});
