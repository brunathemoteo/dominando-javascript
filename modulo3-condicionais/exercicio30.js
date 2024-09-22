// Leia um número e informe se ele é positivo, negativo ou zero

const prompt = require("prompt-sync")();
let numero = prompt("Digite um número: ");
numero = Number.parseFloat(numero);

if (numero > 0) {
	console.log("Número positivo");
} else if (numero < 0) {
	console.log("Número negativo");
} else {
	console.log("Número igual a zero");
}
