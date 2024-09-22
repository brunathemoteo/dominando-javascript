// Solicite dois números e exiba se o primeiro é divisível pelo segundo.
const prompt = require("prompt-sync")();

const numero1 = prompt("Digite o primeiro número: ");
const numero2 = prompt("Digite o segundo número: ");

if (numero1 % numero2 === 0) {
	console.log("O numero", numero1, " é divisível pelo número", numero2);
} else {
	console.log("O numero", numero1, " não é divisível pelo número", numero2);
}
