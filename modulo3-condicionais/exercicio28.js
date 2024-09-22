// Leia tres numeros e informe qual é o maior deles.

const prompt = require("prompt-sync")();
let numero1 = prompt("Digite o primeiro número: ");
let numero2 = prompt("Digite o segundo número: ");
let numero3 = prompt("Digite o segundo número: ");

numero1 = Number.parseFloat(numero1);
numero2 = Number.parseFloat(numero2);
numero3 = Number.parseFloat(numero3);

let numeroMaior = numero1;

if (numero2 > numeroMaior) {
	numeroMaior = numero2;
}
if (numero3 > numeroMaior) {
	numeroMaior = numero3;
}

console.log("O maior número é ", numeroMaior);
