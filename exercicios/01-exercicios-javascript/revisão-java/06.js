const numeros = [10, 20, 30, 40, 50]

numeros.push = 12

console.log(numeros)

numeros.shift();
console.log(numeros)

const max = Math.max(...numeros)
const min = Math.min(...numeros)

console.log(max)
console.log(min)