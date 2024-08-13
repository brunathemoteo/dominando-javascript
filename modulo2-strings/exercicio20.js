// Exercicio 20 - Leia uma palavra e verifique se a mesma é palíndromo (se pode ser lida da mesma forma de trás para frente)

const prompt = require("prompt-sync")();

let palavra = prompt("Digite uma palavra: ");

palavra = palavra.toLowerCase(); // converte caracteres para minusculo

let palavraInvertida = palavra.split("").reverse().join("");

if (palavra === palavraInvertida) {
	console.log("A palavra", palavra, " é um palíndromo");
} else {
	console.log("A palavra", palavra, " não é um palíndromo");
}
