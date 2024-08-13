// Leia uma palavra e retorne a quantidade de vogais presentes na mesma
// Utilizando programação funcional

const prompt = require("prompt-sync")();

const palavra = prompt("Digite a palavra: ");

const vogais = ["a", "e", "i", "o", "u"];

const vogaisEncontradas = palavra
	.split("")
	.filter((letra) => vogais.includes(letra.toLowerCase()));

const quantidadeDeVogais = vogaisEncontradas.length;

console.log("A quantidade de vogais é: ", quantidadeDeVogais);
