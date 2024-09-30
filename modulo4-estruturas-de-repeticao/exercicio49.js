// Escreva os numeros pares de 1 a 50 e os numeros impares de 51 a 100.

const pares = [];
const impares = [];

for (let i = 2; i <= 50; i++) {
	if (i % 2 === 0) {
		pares.push(i);
	}
}

for (i = 51; i <= 100; i++) {
	if (i % 2 !== 0) {
		impares.push(i);
	}
}

console.log("Números pares de 1 a 50");
console.log(pares);
console.log("Números ímpares de 51 a 100");
console.log(impares);
