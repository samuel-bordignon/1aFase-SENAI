/*
 Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. 
 Caso exista, o programa deve mostrar todos os índices que ele se encontra.
 
 Dicas: Use dois vetores - Use um laços de repetição
 */
let numeros = [3, 7, 1, 12, 5, 10, 14, 2, 8, 11]

let palpite = parseInt(prompt('Digite um palpite de número'))

if (numeros.includes(palpite) == true) {
    alert(`O número dito no palpite esta presente nos índice(s): ${numeros.indexOf(palpite)}`)
} else {
    alert('O número dito no palpite nao pertence a esta lsita')
}
console.log(numeros)

