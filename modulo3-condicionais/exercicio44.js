// Solicite a idade de uma pessoa e exiba se ela é criança (0-12 anos), adolescente (13-17 anos), adulto (18-59 anos) ou idoso (60 anos ou mais)

const prompt = require("prompt-sync")();

const idade = Number.parseInt(prompt("Digite a idade: "));

if (idade <= 12) {
	console.log("Criança");
} else if (idade >= 13 && idade < 18) {
	console.log("Adolescente");
} else if (idade > 17 && idade < 60) {
	console.log("Adulto");
} else {
	console.log("Idoso");
}
