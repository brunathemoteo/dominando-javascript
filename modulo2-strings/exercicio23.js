// Receba uma frase e retorne a quantidade de espaços presentes nela.

const prompt = require("prompt-sync")();

const frase = prompt("Digite a frase: ");
let quantidadeDeEspacos = 0;

for (i = 0; i <= frase.length; i++) {
	if (frase[i] === " ") quantidadeDeEspacos++;
}
console.log(quantidadeDeEspacos);
