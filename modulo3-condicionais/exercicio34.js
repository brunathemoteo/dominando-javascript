// Leia tres numeros e diga se a soma deles é positiva, negativa ou igual a zero.

const prompt = require("prompt-sync")();

const numero1 = Number.parseFloat(
	prompt(console.log("Digite o primeiro número: ")),
);
const numero2 = Number.parseFloat(
	prompt(console.log("Digite o segundo número: ")),
);
const numero3 = Number.parseFloat(
	prompt(console.log("Digite o terceiro número: ")),
);

const soma = numero1 + numero2 + numero3;

console.log(soma);

if (soma === 0) {
	console.log("A soma é igual a zero");
} else if (soma > 0) {
	console.log("A soma é positiva");
} else {
	console.log("A soma é negativa");
}
