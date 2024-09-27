// Leia três números e informe se eles podem ser os lados de um triangulo (a soma de dois lados deve ser sempre maior que o terceiro lado)num
const leitura = require("prompt-sync")();

const lado1 = Number.parseFloat(leitura("Digite o primeiro número: "));
const lado2 = Number.parseFloat(leitura("Digite o segundo número: "));
const lado3 = Number.parseFloat(leitura("Digite o terceiro número:"));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
	console.log("Podem ser um triangulo");
} else {
	console.log("Não podem ser um triangulo");
}
