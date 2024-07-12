// Formulas Matematicas

// 1- Digite um programa que calcule a media de dois numeros

const prompt = require("prompt-sync")();
const numero1 = Number.parseFloat(prompt("Digite o primeiro numero: "));
const numero2 = Number.parseFloat(prompt("Digite o segundo numero: "));

const media = (numero1 + numero2) / 2;

console.log("A media dos números é igual a:", media);
