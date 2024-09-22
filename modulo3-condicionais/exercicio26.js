// Exercicio 26 - solicite a idade de uma pessoa e exiba se é maior de idade ou não.

const entrada = require("prompt-sync")();

const idade = entrada("Digite a idade: ");

if (idade >= 18) {
	console.log("Maior de idade");
} else {
	console.log("Menor de idade");
}
