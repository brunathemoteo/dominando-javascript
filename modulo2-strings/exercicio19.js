// Strings - Receba um nome e verifique se o mesmo começa com a letra A.

const prompt = require("prompt-sync")();
const nome = prompt("Digite um nome: ");

if (nome.charAt(0).toUpperCase() === "A") {
	console.log("O nome começa com A.");
} else {
	console.log("O nome não começa com A");
}
