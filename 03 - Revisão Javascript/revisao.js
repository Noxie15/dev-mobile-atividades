// comentário de uma linha

/*
  comentário em bloco
*/

// váriaveis
// var -> não usa no dia a dia
let nome = "Giovanne"
const idade = 20

//nome = "teste"
// idade = 22; não e possivel reatribuir uma constante

//Operadores aritmeticos
const soma = 2 + 2
const subtracao = 2 - 2
const multiplicacao = 2 * 2
const divisao = 2 / 2
const resto = 3 % 2

//Operadores de Comparação
const igual = 2 == 2
const diferente = 3 != 2
const maior = 3 > 2
const menor = 2 < 3
const maiorOuIgual = 2 >= 2
const menorOuIgual = 3 <= 2


// Estruturas condicionais

if (idade >= 18) {
    console.log("Maior de idade")
}

if (idade >= 18) {
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}

// Operador Térnario

const mensagem = idade >= 18 ? "Maior de Idade" : "Menor de Idade"
console.log("Mensagem -> ", mensagem)

// Arrays ou Listas

const frutas = ["Maçã", "Banana", "Uva"]
console.log(frutas[0])
console.log(frutas[1])

console.log ("Quantas frutas tem no array?")
console.log(frutas.length)

frutas.push("Laranja")
console.log("E agora, quantas frutas tem no array?")
console.log(frutas.length)

frutas.forEach(fruta => console.log(fruta))

frutas.pop()
console.log(frutas)

// Objetos
let pessoa = {
    nome: "Giovanne Dilly",
    idade: 19,
    peso: 70,
    altura: 180
}
console.log(pessoa) // testando
console.log(pessoa.nome)
pessoa.idade = 20 //mudei o valor da idade para 20
console.log(pessoa.idade)

// desatribuição de objetos
const {peso, altura} = pessoa
console.log(peso)
console.log(altura)

// propagação de objetos
const endereço = {
    cidade: "Brasília",
    uf:"DF"
}

const pessoaCompleto = {
    ...pessoa,
    ...endereço
}

console.log(pessoaCompleto)

// Funções
// Declaração
function somar(numA, numB) {
    const resultado = numA + numB
    console.log(resultado)
}

// Uso
somar(2,2)
somar(3,3)
somar(10,5)

//função anonima
const subtrair = function (numA, numB){
    const resultado = numA - numB
    console.log(resultado)
}

subtrair(4,2)

// arrow function
const multiplicar = (numA, numB) => numA * numB

console.log(multiplicar(2,2))

// Importando uma função de outro arquivo
// No padrão do node sem projeto não funciona o import por modulos
import {calcularIMC} from "./CalculadoraIMC"

// Modo  de import padrão no node
// const calculadoraIMC = require(./CalculadoraIMC)

const res = calcularIMC(70, 180)

console.log(res)