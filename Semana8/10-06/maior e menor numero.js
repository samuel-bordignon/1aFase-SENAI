// 3) Desenvolva um programa que peça dois números ao usuário e informe qual é o maior e qual é o menor, ou se são iguais.

alert('Digite dois números e o sistema vai descobrir qual é o maior, o menor e se eles sãpo iguais.')
let numeroUm = Number(prompt('Digite o primeiro número: '))
let numerodois = Number(prompt('Digite o segundo número: '))

let numeroMaior = 0
let numeroMenor = 0

if(numerodois > numeroUm){
    numeroMaior = numerodois
    numeroMenor = numeroUm
    alert('O número maior é ' + numeroMaior + ' e o número menor é ' + numeroMenor)
}else if (numerodois == numeroUm){
    alert('O primeiro e o segundo número digitados são iguais.')
}else{
    numeroMaior = numeroUm
    numeroMenor = numerodois
    alert('O número maior é ' + numeroMaior + ' e o número menor é ' + numeroMenor)
}