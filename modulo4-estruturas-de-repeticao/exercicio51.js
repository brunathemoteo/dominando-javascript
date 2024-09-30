// Tabuada de multiplicação todos os numeros de 1 a 10;

for (let i = 1; i <= 10; i++) {
	console.log(`Tabuada do ${i}`);
	for (let j = 1; j <= 10; j++) {
		resultado = j * i;
		console.log(`${j} x ${i} = ${resultado}`);
	}
	console.log("");
}
