//  Faça um programa no qual o usuário deve digitar a sequência de números de 1 a 10, invertida. Caso digite algum 
//  número fora da sequência, interromper e mostrar uma mensagem "Você errou a sequência". Do contrário, ao final 
//  mostrar uma mensagem "Você terminou a sequência corretamente".
alert("Bem vindo! A seguir você terá que digitar abaixo uma contagem regressiva de 10 a 1")
let contagem
let contador = 10

while (contador != 0) {
    contagem = parseInt(prompt('Digite um número: '))
    if (contagem == contador ){
        contador --
        alert("Você acertou a sequência.")
    }else{
        alert("Você errou a sequência.")
    }
}
alert("Você terminou a sequência corretamente")
