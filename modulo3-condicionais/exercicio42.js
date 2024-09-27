// Solicite a altura e o peso de uma pessoa e calcule o seu indice de massa corporal (IMC),
// exibindo a categoria correspondente (abaixo do peso, peso normal, sobrepeso, obesidade, obesidade grave)

const prompt = require("prompt-sync")();

const altura = Number.parseFloat(prompt("Digite a altura em metros: "));
const peso = Number.parseFloat(prompt("Digite o peso em kg: "));

const imc = peso / (altura * altura);

if (imc < 18.5) {
	console.log("IMC: ", imc.toFixed(2));
	console.log("Abaixo do Peso");
} else if (imc < 25) {
	console.log("IMC: ", imc.toFixed(2));
	console.log("Peso Normal");
} else if (imc < 30) {
	console.log("IMC: ", imc.toFixed(2));
	console.log("Sobrepeso");
} else if (imc < 35) {
	console.log("IMC: ", imc.toFixed(2));
	console.log("Obesidade");
} else {
	console.log("Obesidade Grave");
}
