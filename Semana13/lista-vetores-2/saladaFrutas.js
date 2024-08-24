// Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final. Deve ser perguntado em
// sequência “Qual fruta adicionar?”. Quando for adicionado a cereja, finalizar com a frase “Sua salada de frutas está
// pronta!”. Mostrar a lista das frutas.

let saladaFrutas = []
let i = -1
do {
    i++
    saladaFrutas.push(prompt('Qual fruta adicionar?').toUpperCase())
    console.log(i)
    console.log(saladaFrutas[i])
} while (saladaFrutas[i] != 'CEREJA');

alert('Sua salada de frutas está pronta!')
alert('Ingredientes de sua salada de frutas: ' + saladaFrutas.join(', ').toLowerCase())