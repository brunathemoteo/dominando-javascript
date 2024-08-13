// Exercicio 22 - Receba um nome completo e exiba somente o primeiro nome

const prompt = require("prompt-sync")();

const nomeCompleto = prompt("Digite seu nome completo: ");

let partesDoNome = nomeCompleto.split(" ");

const primeiroNome = partesDoNome[0];

console.log("O primeiro nome é: ", primeiroNome);
