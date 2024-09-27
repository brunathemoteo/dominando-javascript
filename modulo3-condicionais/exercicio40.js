// Leia tres notas e informe se o aluno foi aprovado (nota final maior ou igual a 7),
// reprovado (nota final menor que 4) ou ficou de recuperação (nota final entre 4 e 7).

const prompt = require("prompt-sync")();

const nota1 = Number.parseFloat(prompt("Digite a primeira nota: "));
const nota2 = Number.parseFloat(prompt("Digite a segunda nota: "));
const nota3 = Number.parseFloat(prompt("Digite a terceira nota: "));

const notaFinal = (nota1 + nota2 + nota3) / 3;

if (notaFinal >= 7) {
	console.log("Aprovado");
} else if (notaFinal >= 4 && notaFinal < 7) {
	console.log("Recuperação");
} else {
	console.log("Reprovado");
}
