// Criar um programa que gere um vetor com 10 números inteiros aleatórios entre 0 e
//  20. Mostre o vetor na tela. (DESAFIO: O vetor não pode conter números repetidos)

let randomNumber = []
let aleatorio

for (let i = 0; i < 10; i++) {
    aleatorio = Math.floor(Math.random() * (20 - 0) + 0)
randomNumber.push(aleatorio)
}

console.log(randomNumber)

