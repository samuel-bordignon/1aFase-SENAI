// 8) Criar um programa para calcular a densidade demográfica (habitantes por quilômetro quadrado) de uma região. Sendo, densidade igual a
//  população (total de habitantes) dividida pela área (quilômetros quadrados). Mostrar mensagens para densidade alta (maior ou igual a 100), média (entre 25 e 100), baixa (menor que 25).

let numeroHabitantes = Number(prompt('Digite o número de habitantes presentes nese território: '))
let areaQuadrada = Number(prompt('Digite a área quadrada desse território em Km: '))
let densidadeDemgrafica = numeroHabitantes / areaQuadrada

alert('A densidade demográfica desse território é de ' + densidadeDemgrafica + ' pessoas por quilômetro quadrado. ')