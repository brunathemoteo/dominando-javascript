// Exercicio 32 - Leia duas notas de duas provas, calcule a média aritmética e informe se o aluno foi aprovado (maior ou igual a 6) ou reprovado(menor que 6).

const prompt = require("prompt-sync")();

let nota1 = prompt("Digite a nota 1: ");
let nota2 = prompt("Digite a nota 2: ");
nota1 = Number.parseFloat(nota1);
nota2 = Number.parseFloat(nota2);

const media = (nota1 + nota2) / 2;

if (media >= 6) {
	console.log("Aluno aprovado.");
} else {
	console.log("Aluno reprovado.");
}
