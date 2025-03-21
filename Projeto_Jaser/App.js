import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
} from "react-native";

export default function App() {
  function alerta() {
    alert('"Só o Deus do Medo pode trazer o Outro Final." -Jaser Strach');
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textoGrande}>Jaser Strach</Text>
        <Text style={styles.textoCorrido}>
          "Eu não escolhi essa história. Eu não escolhi minhas palavras." -Jaser
          Strach
        </Text>
        <Image
          source={require("./Imagens/imagem1.png")}
          style={{
            height: 200,
            width: 200,
          }}
        />
        <Text style={styles.textoCorrido}>
          Jaser Strach é um dos personagens principais de Enigma do Medo. Ele é
          considerado o antagonista do jogo, apesar de também ser um dos
          personagens jogáveis. Jaser é mais conhecido pelo termo Desassombrado.
        </Text>
        <Image
          source={require("./Imagens/imagem2.png")}
          style={{
            height: 200,
            width: 200,
          }}
        />
        <Text style={styles.textoCorrido}>
          Seu nascimento, evento conhecido como o "Surgimento do Desassombrado",
          transformou a vida de sua família e cumpriu o "Propósito dos Strach",
          fazendo com que cada membro tivesse a Visão e entendesse a sua função
          no Enigma do Medo. Jaser também foi quem manipulou os membros da Ordem
          para que eles também realizassem suas funções dentro do Perímetro,
          depois que Veríssimo fugiu com Mia.
        </Text>
        <Image
          source={require("./Imagens/imagem3.png")}
          style={{
            height: 200,
            width: 200,
          }}
        />
        <Text style={styles.textoCorrido}>
          Na trama do jogo, Jaser se encontra na Catedral, esperando a conclusão
          da sua Visão junto com Veríssimo. Entretanto, após a quebra do ciclo,
          pela interferência de Mia, ele sente que é capaz de fazer a escolha
          que nunca pôde fazer esse tempo todo: deixar de existir e alterar a
          história para que Mia ficasse em seu lugar.
        </Text>
        <Image
          source={require("./Imagens/imagem4.png")}
          style={{
            height: 200,
            width: 200,
          }}
        />
        <Text style={styles.textoCorrido}>
          "E eu me lembro de todas as vezes." -Jaser Strach
        </Text>
        <Image
          source={require("./Imagens/imagem5.png")}
          style={{
            height: 200,
            width: 200,
          }}
        />
        <Text style={styles.textoCorrido}>
          "Qual o maior medo de todos?" -Jaser Strach
        </Text>
        <Button title="OUTRO FINAL" onPress={alerta}></Button>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#63e46a",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    paddingLeft: 10,
  },
  textoGrande: {
    fontSize: 50,
    fontStyle: "italic",
    fontWeight: 800,
  },
  textoCorrido: {
    color: "#3e4a3d",
    fontSize: 20,
    fontWeight: 400,
    fontStyle: "italic",
  },
});
