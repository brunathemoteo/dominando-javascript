// Solicite o nome de um dia da semana e exiba se é um dia util (segunda a sexta) ou um dia de fim de semana (sabado e domingo)

const prompt = require("prompt-sync")();

const dia = prompt("Digite o dia da semana: ").toLowerCase();

if (dia.includes("sabado") || dia.includes("domingo")) {
	console.log("Final de semana");
} else if (
	dia.includes("segunda") ||
	dia.includes("terça") ||
	dia.includes("quarta") ||
	dia.includes("quinta") ||
	dia.includes("sexta")
) {
	console.log("Dia útil");
} else {
	console.log("Dia inválido");
}
