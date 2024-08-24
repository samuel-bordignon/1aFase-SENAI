// Desenvolva um programa que o usuário digite 10 números positivos e inteiros, ao final mostre o valor do
// resultado do somatório da primeira metade dos números menos o somatório da segunda metade. (Somatório da
// primeira metade - Somatório da segunda metade)


let numeros = []
let soma1 = 0
let soma2 = 0
let result

for (let i = 0; i < 10; i++) {
    numeros.push(parseInt(prompt('Digite um número: ')))
}
for (let i = 0; i < 5; i++) {
    soma1 += numeros[i]
}
for (let i = 5; i < numeros.length; i++) {
    soma2 += numeros[i]
}
result = soma1 - soma2
console.table(numeros)
console.log(result)