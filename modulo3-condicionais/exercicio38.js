// Leia o ano de nascimento de uma pessoa e informe se ela está apta a votar (idade maior ou igual a 16 anos)

const leitura = require("prompt-sync")();

const anoAtual = new Date().getFullYear();

const ano = Number.parseInt(leitura("Digite o ano de Nascimento: "));

const idade = anoAtual - ano;

idade >= 16
	? console.log("Está apta a votar.")
	: console.log("Não está apta a votar.");
