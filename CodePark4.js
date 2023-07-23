const prompt = require('prompt-sync')();

let nome = prompt('Digite o nome:');
let endereco = prompt('Digite o endereço:');
let cidade = prompt('Digite a cidade:');
let cpf = prompt('Digite o CPF:');
let rg = prompt('Digite o RG:');
let idade = parseInt(prompt('Digite a idade:'));
let nomePai = prompt('Digite o nome do pai:');
let nomeMae = prompt('Digite o nome da mãe:');
let peso = parseFloat(prompt('Digite o peso:'));
let rendaBruta = parseFloat(prompt('Digite a renda bruta:'));

console.log('\n--- Informações cadastradas ---');
console.log('Nome:', nome);
console.log('Endereço:', endereco);
console.log('Cidade:', cidade);
console.log('CPF:', cpf);
console.log('RG:', rg);
console.log('Idade:', idade);
console.log('Nome do Pai:', nomePai);
console.log('Nome da Mãe:', nomeMae);
console.log('Peso:', peso);
console.log('Renda Bruta:', rendaBruta);
