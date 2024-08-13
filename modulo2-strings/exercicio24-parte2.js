// Leia uma palavra e retorne a quantidade de vogais presentes na mesma
// Utilizando expressoes regulares

const prompt = require("prompt-sync")();

const palavra = prompt("Digite a palavra: ");

const vogais = palavra.match(/[aeiou]/gi);

const quantidadeDeVogais = vogais ? vogais.length : 0;

console.log("A palavra ", palavra, " possui ", quantidadeDeVogais, "vogais");
