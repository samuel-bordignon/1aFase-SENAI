// 2) Desenvolva um programa que pergunte ao usuário o número da sua conta bancária
// e o tipo de operação a ser realizada: 1) Saldo 2) Depósito 3) Saque.Nas opções
// de depósito e saque, perguntar o valor a ser depositado ou sacado e mostrar o
// saldo atualizado na tela.Na opção saldo, apenas mostrar o saldo atual na tela.
// Considere que um saque só pode ser realizado caso haja saldo suficiente.Criar
// uma variável com um valor que represente o saldo inicial.

alert('Bem vindo ao banco monópoly! ')

let resposta = prompt('Digite: \n1) Para verificar seu saldo \n2) Para fazer um depósito \n3) Para fazer um saque \n0) Para finalizar a seção')
let numeroConta = parseInt(prompt('Digite o número da sua conta: '))
let saldo = 10000
let saldoInicial = saldo
let saque
let deposito

while (resposta != 0) {

    switch (resposta) {
        case '1':
            break
        case '2':
            deposito = parseFloat(prompt('Digite quanto você quer depositar na sua conta: '))
            saldo = saldo + deposito
            break
        case '3':
            saque = parseFloat(prompt('Digite quanto você quer sacar de sua conta: '))

            if (saque <= saldo) {
                saldo = saldo - saque;
            } else {
                alert('Saldo insuficiente!');
            }

            break
        default:
            alert('Opção inválida!')
    }
    alert(`Saldo inicial: R$ ${saldoInicial}\nSaldo Final : R$ ${saldo}`)
    resposta = prompt('Digite: \n1) Para verificar seu saldo \n2) Para fazer um depósito \n3) Para fazer um saque \n0) Para finalizar a seção')
}

