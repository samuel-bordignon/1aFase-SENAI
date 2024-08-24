// 6) Programar para que o usuário digite um número. Caso seja par, mostre "O número é par!", senão, mostre "O número é ímpar!"

let numeroDigitado = Number(prompt('Digite um número'))
let verificaNumero = numeroDigitado % 2

if(verificaNumero == 0 ){
    alert("O número é par!")
}else{
    alert("O número é ímpar!")
}