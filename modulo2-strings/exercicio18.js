// Strings - Exercicio 18 - Digite uma palavra e substitua todas as letras "a" por "e".

const prompt = require("prompt-sync")();

const frase = prompt("Digite a frase: ");

const novaFrase = frase.replace(/a/g, "e");

console.log(novaFrase);

console.log(" b r u n a ".replaceAll(" ", ""));
