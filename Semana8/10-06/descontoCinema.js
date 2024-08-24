// 10) Faça um programa que verifique a idade de uma pessoa e forneça um desconto no cinema. Deve ser perguntado o valor
//  do ingresso e a idade. Se ela tiver 12 anos ou menos, conceda um desconto de 50% no ingresso do cinema. Se ela tiver
//   de 13 a 17 anos, conceda um desconto de 25%. Caso contrário (18 anos ou mais), não conceda nenhum desconto. Mostrar
//    ao final o valor que a pessoa deve pagar.

let idadeUsuario = parseInt(prompt('Digite sua idade: '))
let valorIngresso = parseFloat(prompt('Digite o valor do ingresso: '))
const desconto_vinte_cinco = 85 / 100
const desconto_cinquenta = 50 / 100
let valorIngressoFinal 

if(idadeUsuario === 12){
    valorIngressoFinal = valorIngresso * desconto_cinquenta
    alert('Total a pagar: R$' + valorIngressoFinal)
}else if(idadeUsuario  > 12 && idadeUsuario <= 17){
    valorIngressoFinal = valorIngresso * desconto_vinte_cinco
    alert('Total a pagar: R$' + valorIngressoFinal)
}else{
    alert('Total a pagar: R$' + valorIngressoFinal)
}