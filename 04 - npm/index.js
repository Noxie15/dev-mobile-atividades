// Código para executar meu projeto

// Importar um módulo
import {CalcularIMC, tabelaIMC} from "./CalculadoraIMC.js"

console.log(">>> Calculadora IMC <<<")
console.table(tabelaIMC)

const peso = 69
const altura = 1.80

const resultado = CalcularIMC(peso, altura)

console.log("Resultado IMC: ")
console.log(resultado.toFixed(2))

// Importar um módulo externo, uma biblioteca
import moment from "moment/moment.js"

const hoje = moment().locale('pt-br')

console.log("Data:")
console.log(hoje.format("DD/MM/YYYY"))