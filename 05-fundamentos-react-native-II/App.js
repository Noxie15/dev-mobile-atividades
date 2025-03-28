import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import PrimeiroComponente from "./Componentes/PrimeiroComponente";
import JavaScriptComponente from "./Componentes/JavaScriptComponente";
import Perfil from "./Componentes/Perfil";
import ListaComponente from "./Componentes/ListaComponente";
import Atleta from "./Componentes/Atleta";

export default function App() {
  const listaAtletas = [
    {
      nome: "Neymar JR",
      idade: 33,
      numero: 10,
      imagem:
        "https://i.pinimg.com/736x/8f/4e/bc/8f4ebc7e95103e91ba8a4924b021b671.jpg",
    },
    {
      nome: "Lebron James",
      idade: 38,
      numero: 23,
      imagem:
        "https://i.pinimg.com/474x/74/a9/d4/74a9d4330efc822914563347064d6cd3.jpg",
    },
    {
      nome: "Usain Bolt",
      idade: 40,
      numero: 1,
      imagem:
        "https://i.pinimg.com/236x/e5/b5/b2/e5b5b242ce95c3ff1be1e4dbbc4ec85d.jpg",
    },
    {
      nome: "Baianinho de Mauá",
      idade: 51,
      numero: 69,
      imagem:
        "https://i.pinimg.com/236x/61/eb/d5/61ebd578b798cc5ba6292dd031f57649.jpg",
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />

        {listaAtletas.map((atleta) => {
          return (
            <Atleta
              nome={atleta.nome}
              idade={atleta.idade}
              numero={atleta.numero}
              imagem={atleta.imagem}
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
