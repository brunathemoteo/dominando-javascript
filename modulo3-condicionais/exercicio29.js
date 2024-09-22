// Exercicio 29 - Leia um número e informe se ele é par ou ímpar

const prompt = require("prompt-sync")();
let numero = prompt("Digite um número: ");
numero = Number.parseFloat(numero);

if (numero % 2 === 0) {
	console.log("O número: ", numero, " é par.");
} else {
	console.log("O número: ", numero, " é ímpar.");
}
