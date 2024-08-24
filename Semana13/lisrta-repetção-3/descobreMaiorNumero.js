// Fazer um programa no qual o usuário deve digitar 10 números entre
// 0 e 50. Ao final deve mostrar o maior número digitado e o menor número
// digitado. Os números digitados que não estiverem entre 0 e 50, devem ser desconsiderados.

let listaNumeros = []
for(i=0; i<10; i++){
    let numero = Number(prompt('Digite um número de 0 a 50'))
    if(numero >= 0 && numero <= 50){
        listaNumeros.push(numero)
    }
}
let maiorNumero = listaNumeros[0]
let menorNumero = listaNumeros[0]
for(i=1; i<listaNumeros.length; i++){
    if(maiorNumero < listaNumeros[i]){
        maiorNumero = listaNumeros[i]
    }
    if(menorNumero > listaNumeros[i]){
        menorNumero = listaNumeros[i]
    }
}
alert(`Maior número: ${maiorNumero}\nMenor número: ${menorNumero}`)
alert(`todos os números comparados: ${listaNumeros}`)