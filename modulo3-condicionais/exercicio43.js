// Solicite um numero inteiro e verigique se é divisivel por 3 e por 5 ao mesmo tempo

const prompt = require("prompt-sync")();

const numero = Number.parseInt(prompt("Digite um número: "));

numero % 3 === 0 && numero % 5 === 0
	? console.log("É divisível por 3 e 5 ao mesmo tempo")
	: console.log("Não é divisível por 3 e 5 ao mesmo tempo");
