// Receba um nome completo e exiba o sobrenome (ultimo nome) primeiro.

const entrada = require("prompt-sync")();

const nomeCompleto = entrada("Digite o nome completo: ");

const partesDoNome = nomeCompleto.split(" ");

const sobrenome = partesDoNome.pop();

partesDoNome.unshift(sobrenome);

const nomeInvertido = partesDoNome.join(" ");

console.log(nomeInvertido);
