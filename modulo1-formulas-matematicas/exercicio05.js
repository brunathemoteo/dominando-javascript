// Calculo de IMC
const prompt = require("prompt-sync")();
const peso = Number.parseFloat(prompt("Digite o peso: "));
const altura = Number.parseFloat(prompt("Digite a altura: "));
const imc = peso / (altura * altura);

console.log("O IMC é: ", imc.toFixed(2));

if (imc < 18.5) {
	console.log("Magreza");
}
if ((imc >= 18.5) & (imc <= 24.9)) {
	console.log("Normal");
}
if ((imc >= 25) & (imc <= 29.9)) {
	console.log("Sobrepeso");
}
if ((imc >= 30) & (imc <= 39.9)) {
	console.log("Obesidade");
}
if (imc >= 40) {
	console.log("Obesidade Grave");
}
