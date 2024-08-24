// Os números primos possuem várias aplicações dentro da Computação,
// por exemplo, na criptografia. Um número primo é aquele que é divisível
// apenas por um e por ele mesmo. Faça um programa que peça ao usuário para
// digitar cinco números inteiros e mostre na tela se são primos ou não.
let listaNumeros = []
let listaPrimos = []

for (var i = 0; i < 5; i++) {
  let numero = parseInt(prompt('Digite um número: '))//loop para registrar 5 números

  listaNumeros.push(numero)//acrecenta o número digitado na listaNumeros

  let divisor = 0//contador de divisões 
  for (var j = 2; j <= numero; j++) {
    //loop para dividir o número digitado de 2 até o valor do número digitado, desconsiderando 1 
    if (numero % j === 0) {
      divisor++
    }//caso o resto de uma das divisoes darem exatas, o contador de divisões aumenta 
  }

  if (divisor === 1) {
    listaPrimos.push(numero)
    listaNumeros.pop(numero)
  }//se o número digitado tiver um contador de divisões igual a 1, ele entr na lisraPrimos e sai da lista números
}
  alert('Números primos: ' + listaPrimos.join(', '));
  alert('Números não primos: ' + listaNumeros.join(', '))
  //mostra os resultados das listas 

