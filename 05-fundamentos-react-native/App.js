import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PrimeiroComponente from "./componentes/PrimeiroComponente";
import SegundoComponente from "./componentes/SegundoComponente";
import JavaScriptComponente from "./componentes/JavaScriptComponente";
import Perfil from "./componentes/Perfil";

export default function App() {
  return (
    <View style={styles.container}>
      <PrimeiroComponente />
      <SegundoComponente />
      <JavaScriptComponente />
      <Perfil nome="Giovanne" sobrenome="Castro" idade={20} />
      <Perfil nome="Yasmin" sobrenome="Silva" idade={72} />
      <Perfil nome="Michael" sobrenome="Kyle" idade={40} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
});
