// Strings - Exercicio 17 - Digite uma palavra e exiba cada letra separadamente.

const prompt = require("prompt-sync")();

const palavra = prompt("Digite uma palavra: ");

for (let i = 0; i < palavra.length; i++) {
	console.log(palavra[i]);
}
