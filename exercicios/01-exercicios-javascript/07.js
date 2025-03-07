const frutas = ["Maçã", "Banana", "Abacaxi", "Laranja"]
console.log(frutas)

let frutasmaisculas = frutas.map((frutas) => frutas.toUpperCase());
console.log(frutasmaisculas)

let frutasComA = frutas.filter((frutas) => frutas.includes("a"));
console.log(frutasComA)

const tamanhofrutas = []

frutas.forEach((fruta) => tamanhofrutas.push(fruta.length));
console.log(tamanhofrutas)