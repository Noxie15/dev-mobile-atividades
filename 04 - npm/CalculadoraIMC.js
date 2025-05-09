// Criando um módulo no meu projeto
// Exportar as funcionalidades desse módulo

export function CalcularIMC(peso, altura) {
    return peso / (altura * altura)
}

export const tabelaIMC = [
    {limite: 18.5, classificacao: "Magreza"},
    {limite: 24.9, classificacao: "Normal"},
    {limite: 29.9, classificacao: "Sobrepeso"},
    {limite: 34.9, classificacao: "Obesidade Grau I"},
    {limite: 39.9, classificacao: "Obesidade Grau II"},
    {limite: 40, classificacao: "Obesidade Grau III"},
]