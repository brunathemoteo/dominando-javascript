// Leia três numeros e informe qual é o maior e qual é o menor.

const prompt = require("prompt-sync")();

const num1 = Number.parseFloat(
	prompt(console.log("Digite o primeiro numero: ")),
);
const num2 = Number.parseFloat(
	prompt(console.log("Digite o segundo numero: ")),
);
const num3 = Number.parseFloat(
	prompt(console.log("Digite o terceiro numero: ")),
);

let numeroMaior = num1;

if (num2 > numeroMaior) {
	numeroMaior = num2;
}
if (num3 > numeroMaior) {
	numeroMaior = num3;
}

let numeroMenor = num1;

if (num2 < numeroMenor) {
	numeroMenor = num2;
}
if (num3 < numeroMenor) {
	numeroMenor = num3;
}

console.log("Maior: ", numeroMaior);
console.log("Menor: ", numeroMenor);
