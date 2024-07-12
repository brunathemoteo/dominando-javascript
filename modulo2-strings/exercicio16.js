// Strings - Exercício 16 - Crie um programa que leia duas palavras e as concatene, exibindo a palavra resultante.

const prompt = require("prompt-sync")();

const primeiraPalavra = prompt("Digite a primeira palavra: ");
const segundaPalavra = prompt("Digite a segunda palavra: ");

console.log("Resultado: ", primeiraPalavra + segundaPalavra);
