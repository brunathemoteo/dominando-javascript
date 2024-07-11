// Formulas Matematicas

// 1- Escreva um programa que solicite ao usuario dois numeros e exiba a soma, subtração, multiplicação e divisao entre eles.

const prompt = require("prompt-sync")(); 
const num1= Number.parseFloat(prompt('Digite o primeiro número: '));
const num2= Number.parseFloat(prompt('Digite o segundo número: '));

 const soma = num1 + num2;
 const subtracao = num1 - num2;
 const multiplicação = num1* num2;
 const divisao = num1/num2;

console.log("Soma: ", soma);
console.log("Subtração: ", subtracao);
console.log("Multiplicação: ", multiplicação);
console.log("Divisão: ", divisao);