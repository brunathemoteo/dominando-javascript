// Solicite ao usuario um numero e exiba a tabuada de multiplicação desse numero utilizando um laço de repetição

const prompt = require("prompt-sync")();

const numero = prompt("Digite um número: ");

console.log(`Tabuada do número ${numero}`);

for (i = 1; i <= 10; i++) {
	const resultado = numero * i;
	console.log(`${numero} x ${i} = ${resultado}`);
}
