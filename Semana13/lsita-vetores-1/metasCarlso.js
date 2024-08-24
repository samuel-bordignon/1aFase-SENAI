/*
Carlos está definindo suas metas para a semana. Crie um array inicialmente vazio chamado metasSemana.
Adicione três metas à lista. Verifique se a segunda meta é "exercício físico". Se não for, 
modifique-a para "praticar esportes". Imprima a lista de metas semanais no final.

Dicas: Empurrar em inglês - If
*/

let metasSemana = []
for (i = 1; i < 4; i++) {
    metasSemana.push(prompt('Digite a meta número ' + i + ': '))
}
if (metasSemana[1] != "exercício físico") {
    metasSemana[1] = "praticar esportes"
}
console.log(metasSemana.join(", "))