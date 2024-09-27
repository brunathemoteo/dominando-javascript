// Leia a idade de uma pessoa e informe se ela não está apta a votar (idade inferior a 16 anos),
// se está apta a votar, porém nao é obrigada (16, 17, ou idade igual ou superior a 70 anos), ou se é obrigada (18 a 69 anos)

const prompt = require("prompt-sync")();

const idade = Number.parseInt(prompt("Digite a idade: "));

if (idade < 16) {
	console.log("Não está apta a votar.");
} else if (idade >= 18 && idade <= 69) {
	console.log("Voto obrigatório.");
} else {
	console.log("Está apta a votar, sem obrigatoriedade.");
}
