// Leia uma palavra e retorne a quantidade de vogais presentes na mesma

const prompt = require("prompt-sync")();

const palavra = prompt("Digite uma palavra: ");

palavra.toLowerCase();

let quantidadeDeVogais = 0;

for (i = 0; i <= palavra.length; i++) {
	if (
		palavra[i] === "a" ||
		palavra[i] === "e" ||
		palavra[i] === "i" ||
		palavra[i] === "o" ||
		palavra[i] === "u"
	) {
		quantidadeDeVogais++;
	}
}
console.log("A palavra", palavra, " possui ", quantidadeDeVogais, " vogais");
