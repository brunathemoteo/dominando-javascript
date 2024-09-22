// Exercicio 31 - Leia duas notas de duas provas e informe se o aluno foi aprovado (nota maior que 6) ou reprovado (menor que 6) em cada uma das provas.

const prompt = require("prompt-sync")();

let nota1 = prompt("Digite a nota 1: ");
let nota2 = prompt("Digite a nota 2: ");
nota1 = Number.parseFloat(nota1);
nota2 = Number.parseFloat(nota2);

if (nota1 > 6) {
	console.log("Aprovado na prova 1.");
} else {
	console.log("Reprovado na prova 1");
}

if (nota2 > 6) {
	console.log("Aprovado na prova 2.");
} else {
	console.log("Reprovado na prova 2");
}
