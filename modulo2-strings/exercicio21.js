// Exercicio 21 - Leia duas palavras e verifique se a segunda é um anagrama da primeira.

const prompt = require("prompt-sync")();

let primeiraPalavra = prompt("Digite a primeira palavra: ");
let segundaPalavra = prompt("Digite a segunda palavra: ");

primeiraPalavra = primeiraPalavra.toLowerCase();
segundaPalavra = segundaPalavra.toLowerCase();

let arrayPalavra1 = primeiraPalavra.split("");
let arrayPalavra2 = segundaPalavra.split("");

arrayPalavra1.sort();
arrayPalavra2.sort();

if (arrayPalavra1.join() === arrayPalavra2.join()) {
	console.log("As palavras são anagramas");
} else {
	console.log("As palavras não são anagramas");
}
