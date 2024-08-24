// Cria um programa onde o usuário digite 5 números inteiros. Ao terminar de digitar os números,
//  mostrar uma lista somente com números ímpares digitados e a soma desses números.

let numeros = []
let numeroImpar = []
let numeroPar = []


for (let i = 0; i < 5; i++) {
    numeros.push(parseInt(prompt('Digite um número: ')))
}

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 0){
        numeroPar.push(numeros[i])
    }else{
        numeroImpar.push(numeros[i])
    }
}
console.log(numeroPar)
alert('Numeros digitados ímpares: ' + numeroImpar.join(', '))
