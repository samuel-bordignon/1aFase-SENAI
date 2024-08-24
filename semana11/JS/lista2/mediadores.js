//Programar para que o usuário digite 5 números e caso sejam pares, mostre a média deles.
//  Se algum numero digitado não for par, ao final não será mostrada a média e sim uma mensagem 
//  “Um dos números digitados era ímpar”.
let somaNumeros = 0
let numeroImpar = false
let resultFinal
let divisor = 5
let numero

for (var i = 0; i < 5; i++) {
  numero = parseInt(prompt('Digite um número: '))//loop para registrar 5 números
  if(numero % 2 === 0){
    numeroImpar = true
  }
  somaNumeros += numero
}
resultFinal = somaNumeros / divisor
if(numeroImpar = true){
  alert(`Média dos números: ${resultFinal} \n Um dos números digitados era ímpar`)
}else{
  alert(`Média dos números: ${resultFinal}`)
}