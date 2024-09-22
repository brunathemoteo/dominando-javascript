// Leia 3 numeros e informe se a soma deles é divisivel por 5 ou nao

const prompt = require("prompt-sync")();

const num1 = prompt("Digite o primeiro número: ");
const num2 = prompt("Digite o segundo número: ");
const num3 = prompt("Digite o terceiro número: ");

const resultadoSoma = num1 + num2 + num3;

if (resultadoSoma % 5 === 0) {
	console.log("A soma dos números é divisível por 5.");
} else {
	console.log("A soma dos números não é divisível por 5.");
}
