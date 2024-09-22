// Leia dois numeros e informe qual é maior.

const prompt = require("prompt-sync")();
let numero1 = prompt("Digite o primeiro número: ");
let numero2 = prompt("Digite o segundo número: ");

numero1 = Number.parseFloat(numero1);
numero2 = Number.parseFloat(numero2);

if (numero1 > numero2) {
	console.log("O número ", numero1, " é maior que o número ", numero2);
} else if (numero1 === numero2) {
	console.log("Os números são iguais");
} else {
	console.log("O número ", numero2, " é maior que o número ", numero1);
}
