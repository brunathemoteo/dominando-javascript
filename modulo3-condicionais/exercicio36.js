// Leia a idade de três pessoas e informe se algumas delas é maior de idade, se todas são maiores de idade, ou se todas são menores de idade.

const leitura = require("prompt-sync")();

const idade1 = leitura("Digite a primeira idade: ");
const idade2 = leitura("Digite a segunda idade: ");
const idade3 = leitura("Digite a terceira idade: ");

if (idade1 >= 18 && idade2 >= 18 && idade3 >= 18) {
	console.log("Todos são maiores de idade.");
} else if (idade1 < 18 && idade2 < 18 && idade3 < 18) {
	console.log("Todos são menores de idade.");
} else {
	console.log("Algum delas é maior de idade.");
}
